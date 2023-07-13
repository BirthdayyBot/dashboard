'use client';
import { isActiveAtome } from '@lib/atoms';
import { BIRTHDAYY_LOGO, DISCORD_BOT_NAME } from '@lib/environment';
import { useAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

/*
ressources;

https://daisyui.com/components/navbar/#navbar-with-icon-indicator-and-dropdown
https://daisyui.com/components/drawer/#navbar-menu-for-desktop--sidebar-drawer-for-mobile
*/

export default function Navbar(): JSX.Element {
	const [isResponsiveActiv, setIsResponsiveActiv] = useAtom(isActiveAtome);
	const { data: session } = useSession();
	const isLoggedIn = session ? true : false;

	return (
		<div className="navbarComponent">
			<nav className="navbar bg-base-100">
				<Image src={BIRTHDAYY_LOGO} width={64} height={64} alt="Birthdayy Logo" />
				<a className="btn btn-ghost text-xl uppercase font-bold font-heading">{DISCORD_BOT_NAME}</a>
			</nav>
		</div>
	);
}
