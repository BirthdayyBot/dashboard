import type { DiscordAPIError } from '@discordjs/rest';
import { GuildNotFoundError } from '@lib/exceptions';
import { getGuildInfo } from '@lib/utils/discord';

export default async function GuildDetailPage({ params }: { params: { guildId: string } }) {
	const guildInfos = await getGuildInfo(params.guildId).catch((error: DiscordAPIError) => {
		console.error(error);
		if (error.code === 10004) {
			throw new GuildNotFoundError(params.guildId);
		}
		throw error;
	});

	return (
		<div>
			My Guild: {params.guildId} <br />
			{JSON.stringify(guildInfos, null, 2)}
		</div>
	);
}
