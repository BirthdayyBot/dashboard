import Navbar from '@components/navbar';
import AuthProvider from '@lib/provider/auth';
import JotaiProvider from '@lib/provider/jotai';
import '@styles/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Birthdayy | Dashboard',
	description: 'Your place to manage your Birthdayy Configurations and Birthdays.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<JotaiProvider>
			<AuthProvider>
				<html lang="en">
					<body>
						<Navbar />
						<div className="main container is-fluid">{children}</div>
					</body>
				</html>
			</AuthProvider>
		</JotaiProvider>
	);
}
