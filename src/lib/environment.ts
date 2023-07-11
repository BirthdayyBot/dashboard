import { envParseNumber, envParseString } from '@skyra/env-utilities';

// Discord
export const DISCORD_CLIENT_ID = envParseNumber('DISCORD_CLIENT_ID');
export const DISCORD_CLIENT_SECRET = envParseString('DISCORD_CLIENT_SECRET');

// Webpage
export const BRAND_COLOR = envParseString('BRAND_COLOR');
export const BIRTHDAYY_LOGO = envParseString('BIRTHDAYY_LOGO');
