// Define your fonts
import { Hind_Vadodara, Raleway, Rubik } from 'next/font/google';

export const rubikFont = Rubik({
	subsets: ['latin'],
	variable: '--font-rubik',
	weight: ['500', '800'],
	display: 'swap'
});
export const ralewayFont = Raleway({
	subsets: ['latin'],
	variable: '--font-raleway',
	weight: ['400', '800'],
	display: 'swap'
});
export const hindVadodaraFont = Hind_Vadodara({
	subsets: ['latin'],
	variable: '--font-hind-vadodara',
	weight: ['400'],
	display: 'swap',
	preload: true
});
