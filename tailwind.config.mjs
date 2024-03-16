/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '1.25rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			}
		},
		colors: {
			'off-black': '#181818',
			'off-white': '#eeebdd',
			'primary': '#f8d47a',
			'dark-gray-2': '#2e2c2b',
			'mid-gray': '#4c4a46',
			'dark-gray': '#21201f',
			'white': '#ffffff',
		},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		fontFamily: {
			serif: ['Inter', 'sans-serif'],
			display: ['OffBitTrial', 'sans-serif']
		},

		extend: {},
	},
	plugins: [],
}
