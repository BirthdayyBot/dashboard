import Image from 'next/image';

function GuildDetailCard({ guild }: GuildDetailCardProps) {
	return (
		<div className="GuildDetailCard">
			<div className="ex-2 mt-4">
				<>
					<div className="grid-item mb-4 mx-auto">
						<div className="cardbg-base-100 text-center">
							<Image
								src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
								alt={`${guild.name} Server Icon`}
								className="rounded-xl mx-auto grayscale-8"
								width={128}
								height={128}
							/>
						</div>
						<div className="card-body">
							<div className="card-title">
								<p className="  ">{guild.name}</p>
							</div>
						</div>
					</div>
				</>
			</div>
		</div>
	);
}

interface GuildDetailCardProps {
	guild: {
		id: string;
		name: string;
		icon: string;
		owner: boolean;
		permissions: string;
		features: string[];
	};
}

export default GuildDetailCard;
