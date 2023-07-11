'use client';
import { isActiveAtome } from '@lib/atoms';
import { useAtom } from 'jotai';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarDropdown from './dropdown';
import NavbarItem from './item';

export default function Navbar(): JSX.Element {
	const [isActive, setIsActive] = useAtom(isActiveAtome);
	const { data: session } = useSession();
	const isLoggedIn = session ? true : false;

	const login = () => {
		signIn().catch((err) => {
			console.log(err);
		});
	};

	const logout = () => {
		signIn().catch((err) => {
			console.log(err);
		});
	};

	const LoginLogoutButton = () => {
		if (isLoggedIn)
			return (
				<button
					onClick={() => login()}
					className={`button is-rounded is-strong ${isActive ? 'is-primary is-fullwidth' : 'is-white is-outlined'}`}
				>
					Logout
				</button>
			);
		return (
			<button
				onClick={() => logout()}
				className={`button is-rounded is-strong ${isActive ? 'is-primary is-fullwidth' : 'is-white is-outlined'}`}
			>
				Login
			</button>
		);
	};

	const DiscordAvatar = () => {
		if (isLoggedIn) {
			return (
				<figure className="image is-square">
					<Image
						className="is-rounded"
						src={session?.user?.imageUrl ?? 'https://bulma.io/images/placeholders/256x256.png'}
						alt="Profile Picture"
						width={128}
						height={128}
					/>
				</figure>
			);
		}
		return <></>;
	};
	return (
		<div className="navbarComponent">
			<nav className="navbar has-shadow is-primary is-spaced mb-2" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="#">
						<h1 className="navbar-logo is-logo">BIRTHDAYY</h1>
					</a>

					<a
						role="button"
						className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbar-rollout"
						onClick={() => setIsActive(!isActive)}
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbar-rollout" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
					<div className="navbar-start">
						<NavbarItem label="Home" url="/" />
						<NavbarItem label="NavItem" url="#" />

						<NavbarDropdown label="Auth">
							<NavbarItem label="Me" url="/auth-test/me" />
							<NavbarItem label="Server" url="/auth-test/server" />
							<NavbarItem label="Client" url="/auth-test/client" />
							<NavbarItem label="Protected" url="/auth-test/protected" />
							<NavbarItem label="Protected" url="/auth-test/redirect" />
						</NavbarDropdown>
					</div>

					<div className="navbar-end">
						{isLoggedIn ? 'authenticated' : 'not authenticated'}
						<div className="navbar-item mr-3">
							<DiscordAvatar />
						</div>
						<div className="navbar-item mr-3">
							<div className="buttons are-medium">
								<Link
									href="/discord"
									className={`button is-primary is-rounded is-strong ${isActive ? 'is-fullwidth is-outlined' : ''}`}
									target="_blank"
								>
									Discord
								</Link>

								<LoginLogoutButton />
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
