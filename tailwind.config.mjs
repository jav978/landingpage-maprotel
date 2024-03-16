/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','node_modules/flowbite-react/lib/esm/**/*.js',],
	"darkMode":"class",
	theme: {
		extend: {},
	},
	fontFamily: {
		'bakbak-one': ['Bakbak One', 'system-ui'],
		'montserrat': ['montserrat', 'system-ui'],		
	},
	plugins: [
		require('flowbite/plugin')
	],
}
