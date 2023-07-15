import { API } from '@discordjs/core/http-only';
import { REST } from '@discordjs/rest';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);
const api = new API(rest);

export async function getGuildInfo(guildId: string) {
	return api.guilds.get(guildId);
}
