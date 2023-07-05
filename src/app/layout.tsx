import Navbar from '@components/navbar';
import JotaiProvider from '@lib/provider/jotai';
import '@styles/globals.scss';

export const metadata = {
	title: 'Birthdayy | Dashboard',
	description: 'Your place to manage your Birthdayy Configurations and Birthdays.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<JotaiProvider>
			<html lang="en">
				<body>
					<Navbar />
					<div className="main container is-fluid">{children}</div>
				</body>
			</html>
		</JotaiProvider>
	);
}
