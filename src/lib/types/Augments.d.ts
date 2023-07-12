declare namespace NodeJS {
	export interface ProcessEnv {
		// Environment
		NODE_ENV: 'development' | 'production';
		APP_ENV: 'dev' | 'tst' | 'prd';
		DEBUG: 'true' | 'false';

		// Discord
		DISCORD_CLIENT_ID: string;
		DISCORD_CLIENT_SECRET: string;

		// Webpage
		BRAND_COLOR: string;
		BIRTHDAYY_LOGO: string;
	}
}
