const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"node_modules/daisyui/dist/**/*.js",
		"node_modules/react-daisyui/dist/**/*.js",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "media",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.cyan[400],
					light: colors.cyan[200],
					lighter: colors.cyan[50],
					dark: colors.cyan[700],
					darker: colors.cyan[900],
				},
				dark: "#212121",
				light: "#e4e4e4",
			},
			borderRadius: {
				DEFAULT: '0.5rem',
			},
			fontFamily: {
				sans: ["var(--font-poppins)", ...fontFamily.sans],
			},
			borderColor: {
				DEFAULT: colors.cyan[700],
			}
		},
	},
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/colors/themes")["[data-theme=light]"],
					primary: colors.cyan[400],
					"primary-focus": colors.cyan[500],
					"primary-content": "#ffffff",
					secondary: colors.cyan[400],
					"secondary-focus": colors.cyan[500],
					"secondary-content": "#ffffff",
					accent: colors.cyan[400],
					"accent-focus": colors.cyan[500],
					"accent-content": "#ffffff",
				},
				dark: {
					...require("daisyui/src/colors/themes")["[data-theme=dark]"],
					primary: colors.cyan[700],
					"primary-focus": colors.cyan[600],
					"primary-content": "#ffffff",
					secondary: colors.cyan[700],
					"secondary-focus": colors.cyan[600],
					"secondary-content": "#ffffff",
					accent: colors.cyan[700],
					"accent-focus": colors.cyan[600],
					"accent-content": "#ffffff"
				}
			}
		],
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui"),
	],
}
