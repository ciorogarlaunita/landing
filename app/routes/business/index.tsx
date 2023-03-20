import { Handler, PageProps } from "$fresh/server.ts";
import Container from "@/components/Container.tsx";
import Header from "@/components/Header.tsx";
import Stack from "@/components/Stack.tsx";
import { Business } from "@/types/SanitySchema.ts";
import { sanityClient, urlFor } from "@/lib/sanity.ts";
import ListItem from "@/components/ListItem.tsx";
import Navbar from "@/islands/Navbar.tsx";
import Button from "@/components/Button.tsx";

import DiscoverIcon from "tabler-icons/compass.tsx";
import StarIcon from "tabler-icons/star.tsx";

interface DataProps {
	businesses: Business[];
}

export default function Businesses(props: PageProps<DataProps>) {
	return (
		<Container>
			<Navbar 
				back
				title="Businesses"
			/>
			<Stack>
				<Header>
					Businesses
				</Header>
				<div className="flex flex-row gap-2">
					<Button
						className="flex-1"
						startIcon={DiscoverIcon}
					>
						Explore
					</Button>
					<Button
						className="flex-1"
						startIcon={StarIcon}
					>
						Top rated
					</Button>
				</div>
				<ul>
					{props.data.businesses?.map(business => (
						<a key={business._id} href={"/business/" + business.slug?.current}>
							<ListItem
								button
								avatar={urlFor(business.logo).width(128).height(128).url()}
								primaryText={business.name || "Untitled"}
								secondaryText={business.description?.slice(0, 50) + "..."}
							/>
						</a>
					))}
				</ul>
			</Stack>
		</Container>
	)
}

export const handler: Handler = async (_, ctx) => {
	const businesses = await sanityClient.fetch<Business[]>(`*[_type == "business"]`);

	return ctx.render({ businesses });
}
