import type { RESTGetAPIGuildChannelsResult, RESTGetAPIGuildRolesResult } from 'discord-api-types/v10';

interface DiscordSelectionComponentType {
	type: 'channel' | 'role';
	guildId: string;
	label: string;
	id: string | null;
	data: RESTGetAPIGuildChannelsResult | RESTGetAPIGuildRolesResult;
}

export default function DiscordSelectionComponent(params: DiscordSelectionComponentType) {
	const defaultOption = params.id ? params.id : 'Select a channel';
	return (
		<div className="DiscordSelectionComponent">
			<div className="form-control w-full max-w-xs">
				<label className="label">
					<span className="label-text">{params.label}</span>
				</label>
				<select className="select select-bordered" defaultValue={defaultOption}>
					{/* onChange={(event) => console.log(event.target.value)} */}
					{params.data.map((data) => {
						const isActiveValue: boolean = data.id === params.id;
						if (data.id === params.guildId) return null;
						return (
							<option key={data.id} value={data.id} disabled={isActiveValue}>
								{data.name}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}
