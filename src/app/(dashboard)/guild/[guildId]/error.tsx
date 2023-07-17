'use client'; // Error components must be Client Components

import { GuildNotFoundError } from '@lib/exceptions';
import { useEffect } from 'react';

export default function GuildDetailErrorPage({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	if (error instanceof GuildNotFoundError) {
		return (
			<div>
				Guild not found: {/* params.guildId */} <br />
				<button
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

	return <div>DISCORD API ERROR</div>;
}
