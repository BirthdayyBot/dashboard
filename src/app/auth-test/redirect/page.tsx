import { authOptions } from '@lib/options/auth';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export default async function RedirectAuthExample() {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect('/login?callbackUrl=/redirect');
	}
	return (
		<>
			<h1>{session.user.discordId}</h1>{' '}
		</>
	);
}
