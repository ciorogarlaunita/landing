import "std/dotenv/load.ts";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

const projectId = Deno.env.get("SANITY_PROJECT_ID");
const dataset = Deno.env.get("SANITY_DATASET");
const apiVersion = Deno.env.get("SANITY_API_VERSION");

export const sanityClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

// deno-lint-ignore no-explicit-any
export function urlFor(source: any) {
	return builder.image(source);
}
