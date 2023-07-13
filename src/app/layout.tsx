import Navbar from '@components/navbar';
import AuthProvider from '@lib/provider/auth';
import JotaiProvider from '@lib/provider/jotai';
import '@styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Birthdayy | Dashboard',
	description: 'Your place to manage your Birthdayy Configurations and Birthdays.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<JotaiProvider>
			<AuthProvider>
				<html lang="en" data-theme="birthdayy">
					<body>
						<Navbar />
						<div className="main container mx-auto">{children}</div>
					</body>
				</html>
			</AuthProvider>
		</JotaiProvider>
	);
}
