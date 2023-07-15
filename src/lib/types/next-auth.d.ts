import 'next-auth';
import { DiscordProfile } from 'next-auth/providers/discord';
// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
// import type { DefaultUser } from 'next-auth';

declare module 'next-auth' {
	export interface Session {
		user: User;
		profile: DiscordProfile;
		secrets: Secrets;
	}
	interface JWT {
		secrets: string;
	}

	export interface Secrets {
		accessToken: string;
		refreshToken: string;
		tokenType: string;
		expires_at?: number;
	}
	// interface Profile {
	// 	userId: string;
	// 	username: string;
	// 	discriminator: string;
	// 	avatarUrl: string;
	// 	avatar?: string | null;
	// 	accentColor: number;
	// 	locale: string;
	// 	bannerUrl?: string;
	// }

	interface User {
		userId?: string;
		username?: string | null;
		imageUrl?: string | null;
	}
}
