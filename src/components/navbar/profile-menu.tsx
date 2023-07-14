import { useSession } from 'next-auth/react';

const ProfileHoverMenu = () => {
	const { data: session } = useSession();
	const isLoggedIn = session ? true : false;
	return isLoggedIn;
	// IF LOGGED IN return h1 else h2
};

export default ProfileHoverMenu;
