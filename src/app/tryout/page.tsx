import { ProfilePicture } from '@components/profile-picture';
import { BIRTHDAYY_LOGO, DISCORD_BOT_NAME } from '@lib/environment';
export default function TryoutPage(): JSX.Element {
	// const { data: session } = useSession();
	return (
		<>
			<h1>Try out</h1>
			<h3>Name: Name</h3>
			{/* <h3>Name: {session?.user.username}</h3> */}
			{/* <ProfilePicture session={session} /> */}
			<ProfilePicture />
			<h2>{BIRTHDAYY_LOGO}</h2>
			<h1>{DISCORD_BOT_NAME}</h1>
		</>
	);
}
