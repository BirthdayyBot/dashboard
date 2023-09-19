import { getGuildChannels, getGuildRoles } from '@lib/utils/discord';

type DiscordSelectionComponentType = {
	type: 'channel' | 'role';
	guildId: string;
	label: string;
	id: string | null;
};

async function getData(type: 'channel' | 'role', guildId: string) {
	switch (type) {
		case 'channel':
			return await getGuildChannels(guildId);
		case 'role':
			return await getGuildRoles(guildId);
	}
}

export default async function DiscordSelectionComponent(params: DiscordSelectionComponentType) {
	const { type: SelectionComponentType } = params;
	const discordData = await getData(SelectionComponentType, params.guildId);
	return (
		<div className="DiscordSelectionComponent">
			<div className="form-control w-full max-w-xs">
				<label className="label">
					<span className="label-text">{params.label}</span>
				</label>
				<select className="select select-bordered ">
					{/* onChange={(event) => console.log(event.target.value)} */}
					{discordData.map((data) => {
						const isActiveValue: boolean = data.id === params.id;
						if (data.id === params.guildId) return null;
						return (
							<option key={data.id} value={data.id} disabled={isActiveValue} selected={isActiveValue}>
								{data.name}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}
