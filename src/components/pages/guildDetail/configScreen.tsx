import DiscordSelectionComponent from '@components/input/DiscordSelectionComponent';
import BirthdayMessageComponent from '@components/input/birthdayMessage';
import PremiumDisplayComponent from '@components/input/premium';
import TimeZoneComponent from '@components/input/timeZone';
import { getGuildChannels, getGuildRoles } from '@lib/utils/discord';
import type { Guild } from '@prisma/client';
import type { APIGuild } from 'discord-api-types/v10';
import InputGroup from './inputGroup';

export default async function ConfigScreen(params: { guildId: string; databaseData: Guild; discordData: APIGuild }) {
	const guildRoles = await getGuildRoles(params.guildId);
	const guildChannels = await getGuildChannels(params.guildId);
	const { guildId, databaseData } = params;
	return (
		<div className="ConfigScreen">
			<InputGroup title="Channels">
				<DiscordSelectionComponent
					type="channel"
					guildId={guildId}
					label="Announcement Channel"
					id={databaseData.announcementChannel}
					data={guildChannels}
				/>
				<DiscordSelectionComponent
					type="channel"
					guildId={guildId}
					label="Overview Channel"
					id={databaseData.overviewChannel}
					data={guildChannels}
				/>
			</InputGroup>
			<InputGroup title="Roles">
				<DiscordSelectionComponent type="role" guildId={guildId} label="Birthday Role" id={databaseData.birthdayRole} data={guildRoles} />
				<DiscordSelectionComponent
					type="role"
					guildId={guildId}
					label="Birthday Ping Role"
					id={databaseData.birthdayPingRole}
					data={guildRoles}
				/>
			</InputGroup>
			<InputGroup title="Misc">
				<TimeZoneComponent timezone={10} />
				<PremiumDisplayComponent isPremium={databaseData.premium} />
			</InputGroup>
			<InputGroup>
				<BirthdayMessageComponent announcementMessage={databaseData.announcementMessage} isPremium={params.databaseData.premium} />
			</InputGroup>
		</div>
	);
}
