'use client'; // Error components must be Client Components

import { GuildNotFoundError } from '@lib/exceptions';
import { useParams } from 'next/navigation';

export default function GuildDetailErrorPage({ error, reset }: { error: Error | GuildNotFoundError; reset: () => void }) {
	const { guildId } = useParams();
	console.error(error);
	return (
		<div>
			ERROR PAGE: Guild not found: {guildId} <br />
			<button
				className="btn btn-primary"
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	);
}
