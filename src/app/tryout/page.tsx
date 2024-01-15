'use client';

import ThemeChangeButtons from '@components/button/themeChange';
import { ProfilePicture } from '@components/profile-picture';
import { BIRTHDAYY_LOGO, DISCORD_BOT_NAME } from '@lib/environment';
import { useSession } from 'next-auth/react';
export default function TryoutPage(): JSX.Element {
	const { data: session } = useSession();
	return (
		<>
			<h3>Name: {session?.user.username}</h3>
			{/* <ProfilePicture session={session} /> */}
			<ProfilePicture />
			<h2>{BIRTHDAYY_LOGO}</h2>
			<h1>{DISCORD_BOT_NAME}</h1>
			<ThemeChangeButtons />
			{session?.secrets.accessToken}
		</>
	);
}
