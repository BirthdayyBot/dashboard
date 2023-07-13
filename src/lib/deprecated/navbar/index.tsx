'use client';
import LoginLogoutButton from '@components/button/signButton';
import { ProfilePicture } from '@components/profile-picture';
import { isActiveAtome } from '@lib/atoms';
import { BIRTHDAYY_LOGO, DISCORD_BOT_NAME } from '@lib/environment';
import { useAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Navbar(): JSX.Element {
	const [isResponsiveActiv, setIsResponsiveActiv] = useAtom(isActiveAtome);
	const { data: session } = useSession();
	const isLoggedIn = session ? true : false;

	return (
		<div className="navbarComponent">
			<nav className="level navbar is-transparent">
				<div className="level-left">
					<div className="birthdayyLogo level-item">
						<Image src={BIRTHDAYY_LOGO} width={64} height={64} alt="Birthdayy Logo" />
					</div>
					<div className="navbar-item level-item">
						<a href="#" className="has-text-color-white navbar-logo is-logo-font">
							{DISCORD_BOT_NAME}
						</a>
					</div>
				</div>
				{/* <div className="navbar-start"></div> */}
				<div className="level-right">
					<div className="navbar-item">
						<div className=" level-item buttons are-medium">
							<LoginLogoutButton isLoggedIn={isLoggedIn} isResponsive={isResponsiveActiv} />
						</div>
					</div>
					<div className="level-item">
						<ProfilePicture avatarSize={isResponsiveActiv ? 48 : 64} size={256} />
					</div>
				</div>
			</nav>
		</div>
		// <div className="navbarComponent">
		// 	<nav className="navbar has-shadow is-primary is-spaced mb-2" role="navigation" aria-label="main navigation">
		// 		<div className="navbar-brand">
		// 			<a className="navbar-item" href="#">
		// 				<h1 className="navbar-logo is-logo">BIRTHDAYY</h1>
		// 			</a>

		// 			<a
		// 				role="button"
		// 				className={`navbar-burger burger ${isResponsiveActiv ? 'is-active' : ''}`}
		// 				aria-label="menu"
		// 				aria-expanded="false"
		// 				data-target="navbar-rollout"
		// 				onClick={() => setIsResponsiveActiv(!isResponsiveActiv)}
		// 			>
		// 				<span aria-hidden="true"></span>
		// 				<span aria-hidden="true"></span>
		// 				<span aria-hidden="true"></span>
		// 			</a>
		// 		</div>
		// 		<div id="navbar-rollout" className={`navbar-menu ${isResponsiveActiv ? 'is-active' : ''}`}>
		// 			<div className="navbar-start">
		// 				<NavbarItem label="Home" url="/" />
		// 				<NavbarItem label="NavItem" url="#" />

		// 				<NavbarDropdown label="Auth">
		// 					<NavbarItem label="Me" url="/auth-test/me" />
		// 					<NavbarItem label="Server" url="/auth-test/server" />
		// 					<NavbarItem label="Client" url="/auth-test/client" />
		// 					<NavbarItem label="Protected" url="/auth-test/protected" />
		// 					<NavbarItem label="Protected" url="/auth-test/redirect" />
		// 				</NavbarDropdown>
		// 			</div>

		// 			<div className="navbar-end columns is-mobile is-centered">
		// 				<div className="navbar-item mr-3">
		// 					<div className="buttons are-medium is-8">
		// 						{/* <Link
		// 							href="/discord"
		// 							className={`button is-primary is-rounded is-strong ${isResponsiveActiv ? 'is-fullwidth is-outlined' : ''}`}
		// 							target="_blank"
		// 						>
		// 							Discord
		// 						</Link> */}

		// 						<LoginLogoutButton isLoggedIn={isLoggedIn} isResponsive={isResponsiveActiv} />
		// 					</div>
		// 				</div>
		// 				<div className="column is-4 is-fullwidth">
		// 					<ProfilePicture avatarSize={isResponsiveActiv ? 48 : 64} size={256} />
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</nav>
		// </div>
	);
}
