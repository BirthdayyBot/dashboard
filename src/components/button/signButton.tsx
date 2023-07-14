import { signIn, signOut } from 'next-auth/react';

const LoginLogoutButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	console.log('LoginLogoutButton ~ isLoggedIn:', isLoggedIn);
	if (isLoggedIn)
		return (
			<button onClick={() => void signOut()} className={`btn is-rounded is-strong`}>
				Logout
			</button>
		);
	return (
		<button onClick={() => void signIn('discord')} className={`btn is-rounded is-strong`}>
			Login
		</button>
	);
};

export default LoginLogoutButton;
