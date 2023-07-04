import Link from 'next/link';
import React from 'react';

interface NavbarDropdownProps {
	label: string;
	url?: string;
	children: React.ReactNode;
}

const NavbarDropdown = ({ label, url = '#', children }: NavbarDropdownProps) => {
	return (
		<div className="navbar-item has-dropdown is-hoverable">
			<Link className="navbar-link" href={url}>
				{label}
			</Link>
			<div className="navbar-dropdown">{children}</div>
		</div>
	);
};

export default NavbarDropdown;
