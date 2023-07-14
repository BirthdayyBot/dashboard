import { signIn, signOut } from 'next-auth/react';

function login() {
	signIn('discord').catch((err) => {
		console.log(err);
	});
}

function logout() {
	signOut().catch((err) => {
		console.log(err);
	});
}

const LoginLogoutButton = ({ isLoggedIn }: { isLoggedIn: boolean }): JSX.Element => {
	if (isLoggedIn)
		return (
			<button onClick={() => login()} className={`btn is-rounded is-strong `}>
				Logout
			</button>
		);
	return (
		<button onClick={() => logout()} className={`btn is-rounded is-strong $`}>
			Login
		</button>
	);
};

export default LoginLogoutButton;
