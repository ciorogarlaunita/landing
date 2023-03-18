import { GetStaticProps } from "next";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Stack from "@/components/Stack";
import { Business } from "@/types/SanitySchema";
import { sanityClient, urlFor } from "@/lib/sanity";
import ListItem from "@/components/ListItem";
import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {Button} from "react-daisyui";

interface Props {
	businesses: Business[];
}

export default function Businesses(props: Props) {
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
						color="primary"
						startIcon={<Icon name="search"/>}
						className="flex-1"
					>
						Explore
					</Button>
					<Button
						color="primary"
						startIcon={<Icon name="star"/>}
						className="flex-1"
					>
						Top rated
					</Button>
				</div>
				<ul>
					{props.businesses.map(business => (
						<Link key={business._id} href={"/business/" + business.slug?.current}>
							<ListItem
								button
								avatar={urlFor(business.logo).width(64).height(64).url()}
								primaryText={business.name || "Untitled"}
								secondaryText={business.description}
							/>
						</Link>
					))}
				</ul>
			</Stack>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const businesses = await sanityClient.fetch<Business[]>(`*[_type == "business"]`);

	return {
		props: {
			businesses
		},
		revalidate: 15 * 60
	}
}
