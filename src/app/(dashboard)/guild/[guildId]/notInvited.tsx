'use client';
import Link from 'next/link';

interface NotYetInvitedComponentProps {
	guildId: string;
}

export default function NotYetInvitedComponent({ guildId }: NotYetInvitedComponentProps): JSX.Element {
	return (
		<div>
			Bot is not yet added to guild: {guildId}
			<br />
			<Link
				className="btn btn-primary"
				href="/invite"
				target="_blank"
				// onClick={() => {
				// 	window.open(
				// 		'https://discord.com/oauth2/authorize?client_id=916434908728164372&scope=identify%20bot%20applications.commands&permissions=2146958591/',
				// 		'popup',
				// 		'width=400, height=500'
				// 	);
				// 	return false;
				// }}
			>
				Invite Bot
			</Link>
			<Link className="btn btn-neutral btn-outline" href="/guilds">
				Back to Overview
			</Link>
		</div>
	);
}
