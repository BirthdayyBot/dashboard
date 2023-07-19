'use client'; // Error components must be Client Components

import { GuildNotFoundError } from '@lib/exceptions';
import { useParams } from 'next/navigation';

export default function GuildDetailErrorPage({ error, reset }: { error: Error | GuildNotFoundError; reset: () => void }) {
	// get guildId from params. example url is /guild/1234567890
	const { guildId } = useParams();

	return (
		<div>
			Guild not found: {guildId} <br />
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
