import { APIGuild } from 'discord-api-types/v10';
import { PartialGuild } from 'discord-oauth2';
import Image from 'next/image';
import Link from 'next/link';

function GuildDetailCard({ guild }: GuildDetailCardProps) {
	return (
		<div className="GuildDetailCard" key={guild.id}>
			<div className="mx-auto grid-item">
				<Link href={`/guild/${guild.id}`}>
					<div className="card card-compact">
						<div className="text-center bg-base-100">
							<Image
								src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
								alt={`${guild.name} Server Icon`}
								className={`rounded-xl mx-auto border-2 border-primary bg-transparent`} /*  ${guild.isBotAdded ? ' border-primary' : ' border-red-500 grayscale'} */
								width={128}
								height={128}
							/>
						</div>

						<div className="card-body">
							<div className="text-center card-title">
								<p className="">{guild.name}</p>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

interface GuildDetailCardProps {
	guild: PartialGuild | APIGuild;
}

export default GuildDetailCard;
