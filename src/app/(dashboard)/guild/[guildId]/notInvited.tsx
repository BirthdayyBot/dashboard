'use client';
import Link from 'next/link';

interface NotYetInvitedComponentProps {
	guildId: string;
}

// function openInviteInPopup() {
// 	window.open(
// 		'https://discord.com/oauth2/authorize?client_id=916434908728164372&scope=identify%20bot%20applications.commands&permissions=2146958591/',
// 		'Popup',
// 		'location,status,scrollbars,resizable,width=800, height=800'
// 	);
// }

export default function NotYetInvitedComponent({ guildId }: NotYetInvitedComponentProps): JSX.Element {
	return (
		<div>
			Bot is not yet added to guild: {guildId}
			<br />
			<Link
				className="btn btn-primary mr-4"
				href="/invite"
				target="_blank"
				// onClick={() => openInviteInPopup()}
			>
				Invite Bot
			</Link>
			<button
				className="btn btn-info mr-4"
				onClick={
					// reload the page on click
					() => window.location.reload()
				}
			>
				Try again
			</button>
			<Link className="btn btn-neutral btn-outline" href="/guilds">
				Back to Overview
			</Link>
		</div>
	);
}
