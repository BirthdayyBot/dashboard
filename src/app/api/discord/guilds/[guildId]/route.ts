import { API } from '@discordjs/core';
import { REST } from '@discordjs/rest';
import { NextResponse } from 'next/server';

export async function GET({ params }: { params: { guildId: string } }) {
	const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);
	const api = new API(rest);
	const guildInfos = await api.guilds.get(params.guildId);

	return NextResponse.json(guildInfos);
	return NextResponse.json('Hello World!');
}
