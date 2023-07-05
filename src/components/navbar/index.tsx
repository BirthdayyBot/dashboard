'use client';
import { isActiveAtome } from '@lib/atoms';
import { useAtom } from 'jotai';
import Link from 'next/link';
import NavbarDropdown from './dropdown';
import NavbarItem from './item';

export default function Navbar() {
	const [isActive, setIsActive] = useAtom(isActiveAtome);
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

						<NavbarDropdown label="Dropdown">
							<NavbarItem label="Dropdown" url="#" />
							<NavbarItem label="Dropdown" url="#" />
							<NavbarItem label="Dropdown" url="#" />
						</NavbarDropdown>
					</div>

					<div className="navbar-end">
						<div className="navbar-item mr-3">
							<div className="buttons are-medium">
								<Link
									href="/discord"
									className={`button is-primary is-rounded is-strong ${isActive ? 'is-fullwidth is-outlined' : ''}`}
									target="_blank"
								>
									Discord
								</Link>

								<Link
									href="/invite"
									className={`button is-rounded is-strong ${isActive ? 'is-primary is-fullwidth' : 'is-white is-outlined'}`}
									target="_blank"
								>
									Login
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
