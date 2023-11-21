'use client';
import { useRouter } from 'next/router';

export default function GuildPage() {
	const router = useRouter();
	const { guildId } = router.query;

	// Check if guildId is a string and a valid number, if not, set it to null
	const validGuildId = typeof guildId === 'string' && /^\d+$/.test(guildId) ? guildId : null;

	return (
		<div>
			<h1>Guild Page</h1>
			{validGuildId ? <p>Guild ID: {validGuildId}</p> : <p>No valid Guild ID found in the URL.</p>}
		</div>
	);
}
