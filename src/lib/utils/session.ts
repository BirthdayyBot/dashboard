'use client';

import type { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

export function getAccessToken(s?: Session | null): string | undefined {
	const session = s ? s : getSession();
	if (!session) return undefined;
	return session.secrets.accessToken;
}

export const getSession = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { data: session } = useSession();
	return session;
};
