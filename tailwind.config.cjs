const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.cyan[400],
					light: colors.cyan[200],
					lighter: colors.cyan[50],
					dark: colors.cyan[700],
					darker: colors.cyan[900],
				}
			},
			borderRadius: {
				DEFAULT: '0.5rem',
			},
			fontFamily: {
				sans: ["var(--font-poppins)", ...fontFamily.sans],
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
	],
}
