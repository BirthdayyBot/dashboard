import { API } from '@discordjs/core/http-only';
import { REST } from '@discordjs/rest';
import { USE_MOCK } from '@lib/environment';
import { ChannelNotFoundError, GuildNotFoundError } from '@lib/exceptions';
import { GuildInfoMock } from '@lib/mock/guildInfo.mock';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);
const api = new API(rest);

export async function getGuildInfo(guildId: string) {
	if (USE_MOCK) return GuildInfoMock;
	return api.guilds.get(guildId).catch((error: Error) => {
		if (error.message === '404: Not Found' || error.message === 'Unknown Guild') {
			throw new GuildNotFoundError(guildId);
		} else {
			throw error;
		}
	});
}

export async function isBotAdded(guildId: string): Promise<boolean> {
	// check if bot is added to guild

	return (await api.guilds.get(guildId)) ? true : false;
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
