import DiscordOauth2 from 'discord-oauth2';

const oauth = new DiscordOauth2();

export async function getUserGuilds(accessToken: string) {
	return oauth.getUserGuilds(accessToken);
}

export async function getGuild(guildId: string) {
	throw new Error('Function not implemented.');
}

export async function getUser(accessToken: string) {
	return oauth.getUser(accessToken);
}
export async function getGuildMember(accessToken: string, guildId: string) {
	return oauth.getGuildMember(accessToken, guildId);
}
