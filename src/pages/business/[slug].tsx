import { GetStaticPaths, GetStaticProps } from "next";
import { sanityClient, urlFor } from "@/lib/sanity";
import { Business } from "@/types/SanitySchema";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Stack from "@/components/Stack";
import Header from "@/components/business/Header";

interface Props {
	slug: string;
	business: Business
}


export default function BusinessPage(props: Props) {
	return (
		<>
			<Navbar
				back
				title={props.business.name}
				noGutter
			/>
			<Header
				cover={props.business.cover}
				logo={props.business.logo}
				title={props.business.name}
			/>
			<Container>
				<Stack>
					<p>
						{props.business.description}
					</p>
				</Stack>
			</Container>
		</>
	);
}


export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await sanityClient.fetch<{ slug: { current: string } }[]>(`*[_type == "business"]{slug}`);

	return {
		paths: paths.map((path) => ({ params: { slug: path.slug.current } })),
		fallback: "blocking",
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const slug = params.slug as string;
	const business = await sanityClient.fetch(`*[_type == "business" && slug.current == $slug][0] { ..., cover { ..., asset-> { ..., ...metadata } } }`, { slug });

	return {
		props: {
			slug,
			business
		},
		revalidate: 15 * 60
	};
}
