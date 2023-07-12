import { ProfilePicture } from '@components/profile-picture';
export default function TryoutPage(): JSX.Element {
	// const { data: session } = useSession();
	return (
		<>
			<h1>Try out</h1>
			<h3>Name: Name</h3>
			{/* <h3>Name: {session?.user.username}</h3> */}
			{/* <ProfilePicture session={session} /> */}
			<ProfilePicture />
		</>
	);
}
