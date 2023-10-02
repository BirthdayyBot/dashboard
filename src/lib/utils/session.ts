import type { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

export function getAccessToken(s: Session): string | undefined {
	return s.secrets.accessToken;
}

export function useAccessToken(): string | undefined {
	const { data: sessionData } = useSession();
	return sessionData?.secrets.accessToken;
}
