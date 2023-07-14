'use client';
import LoginLogoutButton from '@components/button/signButton';
import { ArrowDropDownIcon } from '@components/icons';
import { BIRTHDAYY_LOGO, DISCORD_BOT_NAME } from '@lib/environment';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

/*
ressources;

https://daisyui.com/components/navbar/#navbar-with-icon-indicator-and-dropdown
https://daisyui.com/components/drawer/#navbar-menu-for-desktop--sidebar-drawer-for-mobile
*/

export default function Navbar(): JSX.Element {
	// const [isResponsiveActiv, setIsResponsiveActiv] = useAtom(isActiveAtome);
	const { data: session } = useSession();
	const isLoggedIn = session ? true : false;

	return (
		<div className="navbarComponent">
			<nav className="navbar bg-base-100">
				<div className="navbar-start">
					<Image src={BIRTHDAYY_LOGO} width={64} height={64} alt="Birthdayy Logo" quality={100} />
					<a className="btn btn-ghost text-xl uppercase font-bold font-heading">{DISCORD_BOT_NAME}</a>
				</div>
				<div className="navbar-center">Middle</div>
				<div className="navbar-end">
					<div className="mr-3">{isLoggedIn ? 'Logged in' : 'Not logged in'}</div>
					<p className="color-dark">
						{session?.user.username}#{session?.profile.discriminator}
					</p>
					{/* dropdown */}
					<div className="dropdown dropdown-hover dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar m-1">
							<div className="w-10 rounded-full">
								<Image
									src={session?.user.imageUrl ?? '/images/placeholder/default_pfp.png'}
									width={64}
									height={64}
									alt="User Profile Picture"
								/>
							</div>
						</label>
						<ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-neutral rounded-box w-52">
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<LoginLogoutButton isLoggedIn={isLoggedIn} />
							</li>
						</ul>
					</div>
					<ArrowDropDownIcon />
				</div>
			</nav>
		</div>
	);
}
