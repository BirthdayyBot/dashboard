import { BIRTHDAYY_LOGO, BRAND_COLOR } from '@lib/environment';
import type { NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

const scopes = ['identify'].join(' ');
export const authOptions: NextAuthOptions = {
	// https://next-auth.js.org/configuration/providers/oauth
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
			authorization: { params: { scope: scopes } }
		})
	],
	pages: {},
	theme: {
		brandColor: BRAND_COLOR,
		colorScheme: 'auto',
		logo: BIRTHDAYY_LOGO
	},
	callbacks: {
		session: ({ session, token }) => {
			if (session?.user) {
				session.user.userId = token.sub;
				session.user.username = token.name;
				session.user.imageUrl = token.picture;
			}
			return session;
		}
	},
	session: {
		strategy: 'jwt',
		maxAge: 3600 * 24 * 30 // 30 days
	}
};
