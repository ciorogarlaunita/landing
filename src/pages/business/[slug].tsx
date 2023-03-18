import { GetStaticPaths, GetStaticProps } from "next";
import { sanityClient } from "@/lib/sanity";
import { Business } from "@/types/SanitySchema";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Stack from "@/components/Stack";

interface Props {
	slug: string;
	business: Business
}


export default function BusinessPage(props: Props) {
	return (
		<Container>
			<Navbar
				back
				title={props.business.name}
			/>
			<Stack>
				<h1
					className="text-4xl"
				>
					{props.business.name}
				</h1>
				<p>
					{props.business.description}
				</p>
			</Stack>
		</Container>
	);
}


export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await sanityClient.fetch<{ slug: { current: string } }[]>(`*[_type == "business"]{slug}`);

	return {
		paths: paths.map((path) => ({ params: { slug: path.slug.current } })),
		fallback: false,
	};
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params) {
		return {
			notFound: true,
		};
	}

	const slug = params.slug as string;
	const business = await sanityClient.fetch(`*[_type == "business" && slug.current == $slug][0]`, { slug });

	return {
		props: {
			slug,
			business
		},
	};
}
