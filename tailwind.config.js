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
			heading: ['var(--font-rubik)', 'sans-serif'],
			'sub-heading': ['var(--font-raleway)', 'sans-serif'],
			body: ['var(--font-hind-vadodara)', 'sans-serif'],
			sans: ['var(--font-hind-vadodara)', 'sans-serif']
		},
		colors: {
			neptune: {
				50: '#f3faf7',
				100: '#d8efe7',
				200: '#b1decf',
				300: '#78c2ad',
				400: '#58a995',
				500: '#3e8e7b',
				600: '#2f7264',
				700: '#295c52',
				800: '#254a43',
				900: '#223f39',
				950: '#0f2421'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	content: ['./src/**/*.{html,ts,tsx}'],
	daisyui: {
		themes: [
			// {
			// 	birthdayy: {
			// 		primary: '#78c2ad',
			// 		secondary: '#f2969a',
			// 		accent: '#2dd4bf',
			// 		neutral: '#252a31',
			// 		'base-100': '#18181B',
			// 		info: '#0ea5e9',
			// 		success: '#4ade80',
			// 		warning: '#f59e0b',
			// 		error: '#e9495c',
			// 		dark: '#1D232A'
			// 	}
			// },
			{
				birthdayy: {
					primary: '#78c2ad',
					'primary-focus': '#40917e',
					'primary-content': '#f8fcfa',
					secondary: '#f2969a',
					'secondary-focus': '#ed7076',
					'secondary-content': '#f8fcfa',

					accent: '#37cdbe',
					'accent-focus': '#2ba69a',
					'accent-content': '#f8fcfa',

					neutral: '#2a2e37',
					'neutral-focus': '#16181d',
					'neutral-content': '#f8fcfa',

					'base-100': '#18181B',
					'base-200': '#131315',
					'base-300': '#0e0f12',
					'base-content': '#f8fcfa',

					info: '#66c7ff',
					success: '#4ade80',
					warning: '#f59e0b',
					error: '#e9495c',

					'--rounded-box': '1.3rem',
					'--rounded-btn': '.5rem',
					'--rounded-badge': '1.9rem',
					'--animation-btn': '.25s',

					'--animation-input': '.2s',
					'--btn-text-case': 'uppercase',
					'--navbar-padding': '.5rem',
					'--border-btn': '2px'
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
