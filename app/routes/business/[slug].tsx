import { Handler, PageProps } from "$fresh/server.ts";
import { sanityClient, urlFor } from "@/lib/sanity.ts";
import { Business } from "@/types/SanitySchema.ts";
import Navbar from "@/islands/Navbar.tsx";
import Container from "@/components/Container.tsx";
import Stack from "@/components/Stack.tsx";
import Header from "@/components/business/Header.tsx";

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
						className="text-4xl font-bold text-center"
					>
						{props.data.business.name}
					</h1>
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
	const business = await sanityClient.fetch(`*[_type == "business" && slug.current == $slug][0] { ..., cover { ..., asset-> { ..., ...metadata } } }`, { slug });

	if (!business) {
		ctx.renderNotFound();
	}

	return ctx.render({
		slug,
		business
	});
}
