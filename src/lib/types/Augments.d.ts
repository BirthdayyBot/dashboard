import type { BooleanString, NumberString } from '@skyra/env-utilities';

declare module '@skyra/env-utilities' {
	interface Env {
		// Environment
		NODE_ENV: 'development' | 'production';
		APP_ENV: 'dev' | 'tst' | 'prd';
		DEBUG: BooleanString;

		// Discord
		DISCORD_CLIENT_ID: NumberString;
		DISCORD_CLIENT_SECRET: string;

		// Webpage
		BRAND_COLOR: string;
		BIRTHDAYY_LOGO: string;
	}
}
