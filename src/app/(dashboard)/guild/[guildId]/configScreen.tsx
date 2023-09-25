import BirthdayMessageComponent from '@components/input/birthdayMessage';
import PremiumDisplayComponent from '@components/input/premium';
import DiscordSelectionComponent from '@components/input/selectionComponent';
import TimeZoneComponent from '@components/input/timeZone';
import { getGuildChannels, getGuildRoles } from '@lib/utils/discord';
import type { Guild } from '@prisma/client';
import type { APIGuild } from 'discord-api-types/v10';

export default async function ConfigScreen(params: { guildId: string; databaseData: Guild; discordData: APIGuild }) {
	const guildRoles = await getGuildRoles(params.guildId);
	const guildChannels = await getGuildChannels(params.guildId);
	const { guildId, databaseData } = params;
	return (
		<div className="ConfigScreen">
			<div className="columns-1">
				<DiscordSelectionComponent
					type="channel"
					guildId={guildId}
					label="Announcement Channel"
					id={databaseData.announcementChannel}
					data={guildChannels}
				/>
				<DiscordSelectionComponent type="role" guildId={guildId} label="Birthday Role" id={databaseData.birthdayRole} data={guildRoles} />
				<TimeZoneComponent timezone={10} />
				<PremiumDisplayComponent isPremium={databaseData.premium} />
				<BirthdayMessageComponent announcementMessage={databaseData.announcementMessage} isPremium={params.databaseData.premium} />
			</div>
		</div>
	);
}
