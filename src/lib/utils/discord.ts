import { API } from '@discordjs/core/http-only';
import { REST } from '@discordjs/rest';
import { USE_MOCK } from '@lib/environment';
import { AuthRequiredError, ChannelNotFoundError, GuildNotFoundError } from '@lib/exceptions';
import { GuildInfoMock } from '@lib/mock/guildInfo.mock';

import { BitField, enumToObject } from '@sapphire/bitfield';
import { APIGuild, PermissionFlagsBits } from 'discord-api-types/v10';

import { PartialGuild } from 'discord-oauth2';
import { notFound } from 'next/navigation';
import { getUserGuilds } from './oauth';
import { getServerSession } from './serverSession';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);
const api = new API(rest);

export async function getGuildInfo(guildId: string): Promise<APIGuild> {
	console.time('getGuildInfo');
	if (USE_MOCK) return GuildInfoMock;
	const result = await api.guilds.get(guildId).catch((error: Error) => {
		if (error.message === '404: Not Found' || error.message === 'Unknown Guild') {
			notFound();
			// throw new GuildNotFoundError(guildId);
		} else {
			throw error;
		}
	});
	console.timeEnd('getGuildInfo');
	return result;
}

export async function isBotAdded(guildId: string): Promise<boolean> {
	console.time('isBotAdded');
	const result = (await api.guilds.get(guildId)) ? true : false;
	console.timeEnd('isBotAdded');
	return result;
}

export async function getGuildChannels(guildId: string) {
	return api.guilds.getChannels(guildId).catch((error: Error) => {
		if (error.message === '404: Not Found' || error.message === 'Unknown Guild') {
			throw new GuildNotFoundError(guildId);
		} else {
			throw error;
		}
	});
}

export async function getGuildRoles(guildId: string) {
	return api.guilds.getRoles(guildId).catch((error: Error) => {
		if (error.message === '404: Not Found' || error.message === 'Unknown Guild') {
			throw new GuildNotFoundError(guildId);
		} else {
			throw error;
		}
	});
}

export async function getChannelData(channelId: string) {
	return api.channels.get(channelId).catch((error: Error) => {
		if (error.message === '404: Not Found' || error.message === 'Unknown Channel') {
			throw new ChannelNotFoundError(channelId);
		} else {
			throw error;
		}
	});
}

export async function getManageableGuilds(guilds?: PartialGuild[] | APIGuild[]) {
	console.time('getManageableGuilds');
	if (!guilds) {
		const session = await getServerSession();
		if (!session) throw new AuthRequiredError();
		guilds = await getUserGuilds(session.secrets.accessToken);
	}
	const guildsWithManagePermission = guilds.filter((guild) => {
		if (!guild.permissions) return false;
		const p: bigint = BigInt(guild.permissions);
		const PermissionsBitField = new BitField(enumToObject(PermissionFlagsBits));
		const hasManageGuild =
			PermissionsBitField.has(p, PermissionFlagsBits.Administrator) || PermissionsBitField.has(p, PermissionFlagsBits.ManageGuild);

		return hasManageGuild;
	});
	console.timeEnd('getManageableGuilds');
	return guildsWithManagePermission;
}
const PermissionsBitField = new BitField(enumToObject(PermissionFlagsBits));
// Todo: Improve efficiency, 10 seconds is too long
export async function isGuildManageable(guildId: string) {
	if (guildId === '901258350484918292') return false;
	console.time('isGuildManageableTime');
	const session = await getServerSession();
	if (!session) throw new AuthRequiredError();
	const guilds = await getUserGuilds(session.secrets.accessToken);
	const guild = guilds.find((guild) => guild.id === guildId);
	if (!guild) {
		console.log('Guild not found, checking if guild is in manageable guilds');
		if ((await getManageableGuilds(guilds)).some((guild) => guild.id === guildId)) return true;
		throw new GuildNotFoundError(guildId);
	}
	if (!guild.permissions) return false;
	const permission: bigint = BigInt(guild.permissions);
	const hasManageGuild =
		PermissionsBitField.has(permission, PermissionFlagsBits.Administrator) ||
		PermissionsBitField.has(permission, PermissionFlagsBits.ManageGuild);
	console.timeEnd('isGuildManageableTime');
	return hasManageGuild;
}
