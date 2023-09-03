/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
	},
	darkMode: false,
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms")
	]
}