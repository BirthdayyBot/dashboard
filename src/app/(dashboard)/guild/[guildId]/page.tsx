import { GuildNotFoundError } from '@lib/exceptions';
import { getGuildInfo } from '@lib/utils/discord';

export default async function GuildDetailPage({ params }: { params: { guildId: string } }) {
	try {
		const guildInfos = await getGuildInfo(params.guildId);
		return (
			<div>
				My Guild: {params.guildId} <br />
				{JSON.stringify(guildInfos, null, 2)}
			</div>
		);
	} catch (error: any) {
		if (error instanceof GuildNotFoundError) {
			return (
				<div>
					Guild not found: {error.guildId} <br />
				</div>
			);
		}

		return <div>Error: {error.message}</div>;
	}
}
