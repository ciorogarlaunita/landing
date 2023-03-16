import { defineConfig, buildLegacyTheme } from "sanity";
import { colors } from "tailwindcss/defaultTheme";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const theme = buildLegacyTheme({
	"--black": "#212121",
	"--white": "#fff",
});


export default defineConfig({
	name: "Ciorogarla_Unita",
	title: "Ciorogarla Unită",
	basePath: "/studio",

	projectId,
	dataset,

	plugins: [deskTool(), visionTool()],

	theme,
	schema: {
		types: schemaTypes,
	},
})
