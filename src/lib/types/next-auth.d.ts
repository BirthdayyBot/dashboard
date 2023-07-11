import 'next-auth';
// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
// import type { DefaultUser } from 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: {
			userId: string | undefined;
			username: string | null | undefined;
			imageUrl: string | null | undefined;
		};
	}
	// interface JWT {
	// 	userRole: 'admin';
	// }
}
