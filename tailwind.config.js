/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				theme: {
					base: '#1E2439',
				},
				primary: {
					light: '#f3f4f6',
				},
				accent: {
					base: '#63B4D1',
				},
			},
			fontFamily: {
				sans: ['var(--font-roboto-flex)'],
			},
			maxWidth: {
				'8xl': 1408,
			},
		},
	},
	plugins: [],
};
