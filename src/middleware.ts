export { default } from 'next-auth/middleware';

export const config = {
	matcher: ['/guild/(.*)', '/user', '/guilds']
};
