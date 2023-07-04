import Link from 'next/link';
const NavbarItem = ({ label, url }: { label: string; url: string }) => {
	return (
		<Link href={url} className="navbar-item">
			{label}
		</Link>
	);
};

export default NavbarItem;
