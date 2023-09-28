import { authOptions } from '@lib/options/auth';
import { getServerSession as getServerSessionNext } from 'next-auth';

export async function getServerSession() {
	return getServerSessionNext(authOptions);
}
