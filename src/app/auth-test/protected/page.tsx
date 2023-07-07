import { authOptions } from '@lib/options/auth';
import { getServerSession } from 'next-auth/next';

export default async function RedirectAuthExample() {
	const session = await getServerSession(authOptions);
	return <>{session ? <h1>{session.user.discordId}</h1> : <h1>Not allowed</h1>}</>;
}
