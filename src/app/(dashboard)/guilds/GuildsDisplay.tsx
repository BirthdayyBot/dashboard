import GuildDetailCard from './guildCard';

export default function GuildsDisplay({ guilds }: { guilds: any[] }): JSX.Element {
	console.log('GuildsDisplay ~ guilds:', guilds);

	return (
		<>
			{guilds.map((guild) => (
				<h1 key={guild.id}>{guild.name}</h1>
			))}
			<div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
				{guilds.map((guild) => (
					<GuildDetailCard guild={guild} />
				))}
			</div>
		</>
	);
}
