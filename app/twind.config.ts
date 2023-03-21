import { Options } from "$fresh/plugins/twindv1.ts";
import presetTailwind from "@twind/preset-tailwind";
import * as colors from "@twind/preset-tailwind/colors";
import presetAutoprefix from "@twind/preset-autoprefix";

export default {
	selfURL: import.meta.url,
	darkMode: "media",
	presets: [
		presetTailwind(),
		presetAutoprefix(),
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.sky[400],
					light: colors.sky[300],
					lighter: colors.sky[100],
					dark: colors.sky[600],
					darker: colors.sky[900],
				},
				dark: "#212121",
				light: "#e4e4e4",
			},
			borderRadius: {
				DEFAULT: "0.75rem",
			},
			borderColor: {
				DEFAULT: colors.sky[700],
			},
		},
	},
} as Partial<Options>;
