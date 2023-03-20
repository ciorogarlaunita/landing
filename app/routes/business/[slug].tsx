import { Handler, PageProps } from "$fresh/server.ts";
import { sanityClient } from "@/lib/sanity.ts";
import { Business } from "@/types/SanitySchema.ts";
import Navbar from "@/islands/Navbar.tsx";
import Container from "@/components/Container.tsx";
import Stack from "@/components/Stack.tsx";
import Header from "@/components/business/Header.tsx";
import Button from "@/components/Button.tsx";

import LinkIcon from "tabler-icons/external-link.tsx";
import FacebookIcon from "tabler-icons/brand-facebook.tsx";
import InstagramIcon from "tabler-icons/brand-instagram.tsx";

interface DataProps {
	slug: string;
	business: Business
}


export default function BusinessPage(props: PageProps<DataProps>) {
	return (
		<>
			<Navbar
				back
				title={props.data.business.name}
				//@ts-ignore: sanity-codegen does not generate types for metadata
				defaultColor={props.data.business.cover?.asset.metadata.palette?.dominant?.background}
				noGutter
			/>
			<Header
				cover={props.data.business.cover}
				logo={props.data.business.logo}
				title={props.data.business.name}
			/>
			<Container>
				<Stack>
					<h1
						class="text-4xl font-bold text-center"
					>
						{props.data.business.name}
					</h1>
					<a
						href={props.data.business.contact?.website}
						target="_blank"
						rel="noopener noreferrer"
						class="w-full"
					>
						<Button
							startIcon={LinkIcon}
							class="w-full"
						>
							Go to website
						</Button>
					</a>
					<div
						class="flex flex-row gap-2"
					>
						{props.data.business.contact?.facebook && (
							<a
								class="flex-1"
								href={props.data.business.contact.facebook}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button
									class="w-full"
									startIcon={FacebookIcon}
								>
									Facebook
								</Button>
							</a>
						)}
						{props.data.business.contact?.instagram && (
							<a 
								class="flex-1"
								href={props.data.business.contact.instagram}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button
									class="w-full"
									startIcon={InstagramIcon}
								>
									Instagram
								</Button>
							</a>
						)}
					</div>
					<p>
						{props.data.business.description}
					</p>
				</Stack>
			</Container>
		</>
	);
}


export const handler: Handler = async (_, ctx) => {
	const params = ctx.params;

	if (!params) {
		ctx.renderNotFound();
	}

	const slug = params.slug as string;
	const business = await sanityClient.fetch(`*[_type == "business" && slug.current == $slug][0] { ..., cover { ..., asset -> { ..., metadata } } }`, { slug });

	if (!business) {
		ctx.renderNotFound();
	}

	return ctx.render({
		slug,
		business
	});
}
