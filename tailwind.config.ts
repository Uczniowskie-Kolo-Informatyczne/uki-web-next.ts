import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				theme: {
					base: '#1E2439',
					dark: '#25262b',
				},
				primary: {
					light: '#f3f4f6',
				},
				accent: {
					base: '#5c7cfa',
					light: '#63B4D1',
				},
			},
			fontFamily: {
				sans: ['--font-roboto-flex'],
			},
			maxWidth: {
				'8xl': '1408px',
			},
		},
	},
	plugins: [],
} satisfies Config;
