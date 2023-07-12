declare namespace NodeJS {
	export interface ProcessEnv {
		// Environment
		NODE_ENV: 'development' | 'production';
		APP_ENV: 'dev' | 'tst' | 'prd';
		DEBUG: 'true' | 'false';

		// Discord
		DISCORD_CLIENT_SECRET: string;
		NEXT_PUBLIC_DISCORD_CLIENT_ID: string;
		NEXT_PUBLIC_DISCORD_BOT_NAME: string;

		// Webpage
		NEXT_PUBLIC_BRAND_COLOR: string;
		NEXT_PUBLIC_BIRTHDAYY_LOGO: string;
	}
}
