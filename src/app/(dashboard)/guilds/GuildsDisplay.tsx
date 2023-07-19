import GuildDetailCard from './guildCard';

export default function GuildsDisplay({ guilds }: { guilds: any[] }): JSX.Element {
	return (
		<>
			<div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
				{guilds.map((guild) => (
					<GuildDetailCard guild={guild} key={guild.id} />
				))}
			</div>
		</>
	);
}
