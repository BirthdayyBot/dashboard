import DebugDisplay from '@components/util/DebugDisplay';
import { guild } from '@lib/utils/db';
import { getGuildInfo, isGuildManageable } from '@lib/utils/discord';
import { getServerSession } from '@lib/utils/serverSession';
import type { Guild } from '@prisma/client';
import type { APIGuild } from 'discord-api-types/v10';
import type { Metadata, ResolvingMetadata } from 'next';
import ConfigScreen from '../../../../components/pages/guildDetail/configScreen';
import NotYetInvitedComponent from '../../../../components/pages/guildDetail/notInvited';
import TestComponent from '../../../../components/pages/guildDetail/tryout';

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
	const session = await getServerSession();
	const gm = await isGuildManageable(guildId);
	if (!gm) {
		console.log('no access');
		return (
			<div className="noAccess">
				You do not have access to this guild {guildId}
				<a href="/guilds">Back to Overview</a>
			</div>
		);
	}
	const { databaseData, discordData } = await getGuildDetails(guildId);

	databaseData ?? console.log('databaseData does not exist');
	discordData ?? console.log('discordData does not exist');
	{
		/* TODO: Show guild details from session */
	}
	if (!databaseData || !discordData) {
		return <NotYetInvitedComponent guildId={guildId} />;
	}

	return (
		<div>
			My Guild: {discordData.name} - {guildId} <br />
			<TestComponent guildId={guildId} />
			<ConfigScreen guildId={guildId} discordData={discordData} databaseData={databaseData} />
			<br />
			<br />
			<DebugDisplay label="Database" data={JSON.stringify(databaseData)} />
			<br />
			<br />
			<DebugDisplay label="Discord" data={JSON.stringify(discordData)} />
			<br />
			<br />
			Session Guilds: {JSON.stringify(session?.guilds)}
		</div>
	);
}
