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

const LoginLogoutButton = ({ isLoggedIn, isResponsive }: { isResponsive: boolean; isLoggedIn: boolean }): JSX.Element => {
	if (isLoggedIn)
		return (
			<button
				onClick={() => login()}
				className={`button is-rounded is-strong ${isResponsive ? 'is-primary is-fullwidth' : 'is-white is-outlined'}`}
			>
				Logout
			</button>
		);
	return (
		<button
			onClick={() => logout()}
			className={`button is-rounded is-strong ${isResponsive ? 'is-primary is-fullwidth' : 'is-white is-outlined'}`}
		>
			Login
		</button>
	);
};

export default LoginLogoutButton;
