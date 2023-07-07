import { authOptions } from '@lib/options/auth';
import NextAuth from 'next-auth';

// https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
