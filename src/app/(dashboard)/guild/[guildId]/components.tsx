import { getGuildChannels } from '@lib/utils/discord';
import type { RESTGetAPIGuildChannelsResult } from 'discord-api-types/v10';

/**
 * Renders a dropdown list of channels for a specific guild.
 * @param {string} guildId - The ID of the guild for which the channels should be fetched.
 * @returns {JSX.Element} - The rendered JSX that represents the component.
 */
export default async function GuildComponent({ guildId }: { guildId: string }): Promise<JSX.Element> {
	// Fetch the guild channels
	const channels: RESTGetAPIGuildChannelsResult = await getGuildChannels(guildId);

	// Render the component
	return (
		<div>
			My Guild: {guildId}
			<div className="components">
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Announcement Channel</span>
					</label>
					<select className="select select-bordered">
						{channels.map((channel) => {
							const isActive: boolean = channel.id === '1086294333625470997'; // TODO: Replace with guild settings
							return (
								<option key={channel.id} value={channel.id} disabled={isActive} selected={isActive}>
									{channel.name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		</div>
	);
}
