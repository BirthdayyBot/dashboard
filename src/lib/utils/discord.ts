import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/rest/v10';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

export async function getGuildInfo(guildId: string) {
	try {
		const guildData = await rest.get(Routes.guild(guildId));
		return guildData;
	} catch (error) {
		console.error(error);
		return null;
	}
}
