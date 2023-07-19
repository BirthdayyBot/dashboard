import { APP_ENV } from '@lib/environment';
import { Birthday } from './Birthday';
import { Guild } from './Guild';
import { User } from './User';

const globalForGuild = globalThis as unknown as {
	guild: Guild | undefined;
};

const globalForBirthday = globalThis as unknown as {
	birthday: Birthday | undefined;
};
const globalForUser = globalThis as unknown as {
	user: User | undefined;
};

export const birthday = globalForBirthday.birthday || new Birthday();
export const guild = globalForGuild.guild || new Guild();
export const user = globalForUser.user || new User();

if (APP_ENV !== 'prd') globalForGuild.guild = guild;
if (APP_ENV !== 'prd') globalForBirthday.birthday = birthday;
if (APP_ENV !== 'prd') globalForUser.user = user;
