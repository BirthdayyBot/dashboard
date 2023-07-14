import { BIRTHDAYY_LOGO, BRAND_COLOR, DISCORD_CLIENT_ID } from '@lib/environment';
import type { NextAuthOptions, Secrets } from 'next-auth';
import type { DefaultJWT } from 'next-auth/jwt';
import DiscordProvider, { type DiscordProfile } from 'next-auth/providers/discord';

const scopes = ['identify', 'guilds', 'guilds.members.read', 'applications.commands.permissions.update'].join(' ');
export const authOptions: NextAuthOptions = {
	// https://next-auth.js.org/configuration/providers/oauth
	providers: [
		DiscordProvider({
			clientId: DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
			authorization: { params: { scope: scopes } }
		})
	],
	debug: process.env.DEBUG === 'true',
	pages: {},
	theme: {
		brandColor: BRAND_COLOR,
		colorScheme: 'auto',
		logo: BIRTHDAYY_LOGO
	},
	callbacks: {
		session: ({ session, token }) => {
			console.log('session ~ token:', token);
			if (session?.user) {
				session.user.userId = token.sub;
				session.user.username = token.name;
				session.user.imageUrl = token.picture;
			}
			// Somewhat hacky implementation
			session.profile = token.profile as DiscordProfile;
			session.secrets = token.secrets as Secrets;
			return session;
		},
		jwt({ token, user, profile, account }): DefaultJWT {
			if (account) {
				token.secrets = {
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					expires_at: account.expires_at
				};
			}
			if (profile) {
				token.profile = profile;
			}
			// console.log('jwt ~ token:', token);
			console.log('jwt ~ user:', user);
			console.log('jwt ~ profile:', profile);
			console.log('jwt ~ account:', account);
			return token;
		}
	},
	session: {
		strategy: 'jwt',
		maxAge: 3600 * 24 * 30 // 30 days
	}
};
