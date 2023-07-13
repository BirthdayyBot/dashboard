'use client';

import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const ThemeChangeButtons = () => {
	useEffect(() => {
		themeChange(false);
		// 👆 false parameter is required for react project
	}, []);
	return (
		<div className="themeChangeButtons">
			<ThemeButton theme={'birthdayy'} />
			<ThemeButton theme={'dark'} />
			<ThemeButton theme={'black'} />
			<ThemeButton theme={'cupcake'} />
			<ThemeButton theme={'bumblebee'} />
			<ThemeButton theme={'emerald'} />
			<ThemeButton theme={'corporate'} />
			<ThemeButton theme={'synthwave'} />
			<ThemeButton theme={'winter'} />
		</div>
	);
};

const ThemeButton = ({ theme }: { theme: string }) => {
	return (
		<button className="btn w-32 btn-primary mr-1" data-set-theme={theme} data-act-class="ACTIVECLASS">
			{theme}
		</button>
	);
};

export default ThemeChangeButtons;
