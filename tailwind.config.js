/** @type {import('tailwindcss').Config}*/
const TailwindConfig = {
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			}
		},
		fontFamily: {
			heading: ['Rubik'],
			'sub-heading': ['Raleway', 'sans-serif'],
			body: ['"Hind Vadodara"', 'sans-serif'],
			sans: ['"Hind Vadodara"', 'sans-serif']
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	content: ['./src/**/*.{html,ts,tsx}'],
	daisyui: {
		themes: [
			{
				birthdayy: {
					primary: '#78c2ad',
					secondary: '#f2969a',
					accent: '#2dd4bf',
					neutral: '#252a31',
					'base-100': '#0E1015',
					info: '#0ea5e9',
					success: '#4ade80',
					warning: '#f59e0b',
					error: '#e9495c',
					dark: '#1D232A'
				}
			},
			'dark',
			'black',
			'light',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'night',
			'coffee',
			'winter'
		], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: 'dark', // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: false // Shows info about daisyUI version and used config in the console when building your CSS
	}
};

module.exports = TailwindConfig;
