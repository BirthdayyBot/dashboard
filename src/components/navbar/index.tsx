'use client';
import LoginLogoutButton from '@components/button/signButton';
import { ProfilePicture } from '@components/profile-picture';
import { isActiveAtome } from '@lib/atoms';
import { useAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import NavbarDropdown from './dropdown';
import NavbarItem from './item';

export default function Navbar(): JSX.Element {
	const [isResponsiveActiv, setIsResponsiveActiv] = useAtom(isActiveAtome);
	const { data: session } = useSession();
	const isLoggedIn = session ? true : false;

	return (
		<div className="navbarComponent">
			<nav className="navbar has-shadow is-primary is-spaced mb-2" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="#">
						<h1 className="navbar-logo is-logo">BIRTHDAYY</h1>
					</a>

					<a
						role="button"
						className={`navbar-burger burger ${isResponsiveActiv ? 'is-active' : ''}`}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbar-rollout"
						onClick={() => setIsResponsiveActiv(!isResponsiveActiv)}
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div id="navbar-rollout" className={`navbar-menu ${isResponsiveActiv ? 'is-active' : ''}`}>
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

					<div className="navbar-end columns is-mobile is-centered">
						<div className="navbar-item mr-3">
							<div className="buttons are-medium is-8">
								{/* <Link
									href="/discord"
									className={`button is-primary is-rounded is-strong ${isResponsiveActiv ? 'is-fullwidth is-outlined' : ''}`}
									target="_blank"
								>
									Discord
								</Link> */}

								<LoginLogoutButton isLoggedIn={isLoggedIn} isResponsive={isResponsiveActiv} />
							</div>
						</div>
						<div className="column is-4 is-fullwidth">
							<ProfilePicture avatarSize={isResponsiveActiv ? 48 : 64} size={256} />
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
