import { USE_MOCK } from '@lib/environment';
import { GuildsMock } from '@lib/mock/guilds.mock';
import DiscordOauth2 from 'discord-oauth2';

const oauth = new DiscordOauth2();

export async function getUserGuilds(accessToken: string) {
	if (USE_MOCK) return GuildsMock;
	return oauth.getUserGuilds(accessToken);
}

export async function getUser(accessToken: string) {
	return oauth.getUser(accessToken);
}
export async function getGuildMember(accessToken: string, guildId: string) {
	return oauth.getGuildMember(accessToken, guildId);
}
