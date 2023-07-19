import { GuildNotFoundError } from '@lib/exceptions';
import { prisma } from '@lib/prisma';
import { getGuildInfo } from '@lib/utils/discord';
import type { Metadata, ResolvingMetadata } from 'next';

type GuildDetailPageProps = {
	params: {
		guildId: string;
	};
};

type GetGuildDetailsOptions =
	| {
			discord?: boolean;
			database?: boolean;
	  }
	| undefined;
export async function generateMetadata({ params }: GuildDetailPageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const { discordData } = await getGuildDetails(params.guildId, { discord: true, database: false });
	return {
		title: `${discordData?.name ?? 'Guild'} | Birthdayy`
	};
}

async function getGuildDetails(guildId: string, options?: GetGuildDetailsOptions) {
	const isDiscordRequested = options?.discord ?? true;
	const isDatabaseRequested = options?.database ?? true;

	let discordData = null;
	let databaseData = null;
	if (isDiscordRequested) {
		discordData = await getGuildInfo(guildId);
	}
	if (isDatabaseRequested) {
		databaseData = await prisma.guild.findUnique({
			where: {
				guildId
			}
		});
	}
	return {
		discordData,
		databaseData
	};
}

export default async function GuildDetailPage({ params }: GuildDetailPageProps) {
	// TODO: #11 Validate that User can access guilds configuration
	const { guildId } = params;
	const { databaseData, discordData } = await getGuildDetails(guildId);

	try {
		return (
			<div>
				My Guild: {guildId} <br />
				<br />
				<br />
				Database: {JSON.stringify(databaseData, null, 2)}
				<br />
				<br />
				Discord: {JSON.stringify(discordData, null, 2)}
			</div>
		);
	} catch (error: any) {
		if (error instanceof GuildNotFoundError) {
			// TODO: #12 Create Guild Not Found Error Display Component
			return (
				<div>
					Guild not found: {error.guildId} <br />
				</div>
			);
		}
		return <div>Error: {error.message}</div>;
	}
}
