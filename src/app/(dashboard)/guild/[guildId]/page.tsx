import { getGuildInfo } from '@lib/utils/discord';

export default async function Guild({ params }: { params: { guildId: string } }) {
	const guildInfos = await getGuildInfo(params.guildId);

	return (
		<div>
			My Guild: {params.guildId} <br />
			{JSON.stringify(guildInfos, null, 2)}
		</div>
	);
}
