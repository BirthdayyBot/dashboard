// Discord
export const { DISCORD_CLIENT_SECRET } = process.env;
export const DISCORD_CLIENT_ID = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;

// Webpage
export const BRAND_COLOR = process.env.NEXT_PUBLIC_BRAND_COLOR;
export const BIRTHDAYY_LOGO = process.env.NEXT_PUBLIC_BIRTHDAYY_LOGO;
export const DISCORD_BOT_NAME = process.env.NEXT_PUBLIC_DISCORD_BOT_NAME;

// NEXT
// export const { NEXTAUTH_BASE_PATH, NEXTAUTH_URL } = process.env;
export const { APP_ENV } = process.env;

// GENERAL
export const { BASE_URL } = process.env;
export const USE_MOCK = process.env.USE_MOCK_DATA === 'true';
export const DEFAULT_ANNOUNCEMENT_MESSAGE =
	'<:arrow_right_birthdayy:1102221944016875650> Today is a special Day!{NEW_LINE}<:gift_birthdayy:1102222060845015050> Please wish {MENTION} a happy Birthday <3';
