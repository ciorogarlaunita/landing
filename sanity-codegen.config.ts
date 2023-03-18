import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
	schemaPath: "./schemas",
	outputPath: "./src/types/SanitySchema.ts",
};

export default config;
