import { Config } from "tailwindcss";

export default {
	darkMode: "media",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#38bdf8",
					light: "#7dd3fc",
					lighter: "#e0f2fe",
					dark: "#0284c7",
					darker: "#0c4a6e",
				},
				dark: "#212121",
				light: "#e4e4e4",
			},
			borderRadius: {
				DEFAULT: "0.75rem",
			},
			borderColor: {
				DEFAULT: "#0369a1",
			},
		},
	},
} as Config;
