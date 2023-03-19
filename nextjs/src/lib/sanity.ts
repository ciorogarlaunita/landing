import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const sanityClient = createClient({
	projectId,
	dataset,
	apiVersion,
	// We don't need CDN since we are using ISR
	useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
	return builder.image(source)
}
