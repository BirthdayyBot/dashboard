import { guild } from '@lib/utils/db';
import { getGuildInfo } from '@lib/utils/discord';
import { getServerSession } from '@lib/utils/serverSession';
import type { Guild } from '@prisma/client';
import type { APIGuild } from 'discord-api-types/v10';
import type { Metadata, ResolvingMetadata } from 'next';
import ConfigScreen from './configScreen';

interface GuildDetailPageProps {
	params: {
		guildId: string;
	};
}

type GetGuildDetailsOptions =
	| {
			discord?: boolean;
			database?: boolean;
	  }
	| undefined;
async function getGuildDetails(guildId: string, options?: GetGuildDetailsOptions) {
	const isDiscordRequested = options?.discord ?? true;
	const isDatabaseRequested = options?.database ?? true;

	let discordData: APIGuild | null | undefined = undefined;
	let databaseData: Guild | null | undefined = undefined;
	if (isDiscordRequested) {
		discordData = await getGuildInfo(guildId);
	}
	if (isDatabaseRequested && discordData !== null) {
		databaseData = await guild.get.GuildById(guildId).catch(() => {
			return null;
		});
	}
	return {
		discordData,
		databaseData
	};
}
export async function generateMetadata({ params }: GuildDetailPageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const { discordData } = await getGuildDetails(params.guildId, { discord: true, database: false });
	return {
		title: `${discordData?.name ?? 'Guild'} | Birthdayy`,
		description: (await parent).description
	};
}

export default async function GuildDetailPage({ params }: GuildDetailPageProps) {
	// TODO: #11 Validate that User can access guilds configuration
	const { guildId } = params;
	const { databaseData, discordData } = await getGuildDetails(guildId);
	const session = await getServerSession();
	if (!databaseData || !discordData) {
		return (
			<div>
				Guild not found: {guildId} <br />
			</div>
		);
	}

	return (
		<div>
			My Guild: {guildId} <br />
			<ConfigScreen guildId={guildId} discordData={discordData} databaseData={databaseData} />
			<br />
			<br />
			Database: {JSON.stringify(databaseData)}
			<br />
			<br />
			Discord: {JSON.stringify(discordData)}
			<br />
			<br />
			Session Guilds: {JSON.stringify(session?.guilds)}
		</div>
	);
}
