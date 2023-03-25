import { Handler, PageProps } from "$fresh/server.ts";
import { sanityClient } from "@/lib/sanity.ts";
import { Business } from "@/types/SanitySchema.ts";
import { getBusinessType, getMapLink } from "@/lib/business.ts";
import ListItem from "@/components/ListItem.tsx";
import Navbar from "@/islands/Navbar.tsx";
import Container from "@/components/Container.tsx";
import Card from "@/components/Card.tsx";
import Stack from "@/components/Stack.tsx";
import Header from "@/components/business/Header.tsx";
import Button from "@/components/Button.tsx";

import MapPinIcon from "tabler-icons/map-pin.tsx";
import LinkIcon from "tabler-icons/external-link.tsx";
import FacebookIcon from "tabler-icons/brand-facebook.tsx";
import InstagramIcon from "tabler-icons/brand-instagram.tsx";
import PhoneIcon from "tabler-icons/phone.tsx";
import MailIcon from "tabler-icons/mail.tsx";

interface DataProps {
	slug: string;
	business: Business;
}

export default function BusinessPage(props: PageProps<DataProps>) {
	const businessType = getBusinessType(props.data.business.type);
	const mapLink = getMapLink(
		props.data.business.locations?.[0].coordinates?.lat || 0,
		props.data.business.locations?.[0].coordinates?.lng || 0,
	);

	return (
		<>
			<Navbar
				back
				title={props.data.business.name}
				//@ts-ignore: sanity-codegen does not generate types for metadata
				defaultColor={props.data.business.cover?.asset.metadata.palette
					?.dominant?.background}
				noGutter
			/>
			<Header
				cover={props.data.business.cover}
				logo={props.data.business.logo}
				title={props.data.business.name}
			/>
			<Container>
				<Stack>
					<h1 class="text-4xl font-bold text-center">
						{props.data.business.name}
					</h1>
					<p class="opacity-50 text-center">
						<businessType.icon
							size={20}
							class="inline align-middle mr-1"
						/>
						{businessType.text}
					</p>
					{props.data.business.locations && (
						<a
							href={mapLink}
							target="_blank"
							rel="noopener noreferrer"
							class="w-full"
						>
							<Button
								startIcon={MapPinIcon}
								class="w-full"
							>
								Go to location
							</Button>
						</a>
					)}
					{props.data.business.contact?.website && (
						<a
							href={props.data.business.contact.website}
							target="_blank"
							rel="noopener noreferrer"
							class="w-full"
						>
							<Button
								startIcon={LinkIcon}
								outlined
								class="w-full"
							>
								Go to website
							</Button>
						</a>
					)}
					<Card noPadding>
						{props.data.business.contact?.facebook && (
							<a
								href={props.data.business.contact.facebook}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ListItem
									icon={FacebookIcon}
									button
									primaryText="Facebook"
								/>
							</a>
						)}
						{props.data.business.contact?.instagram && (
							<a
								href={props.data.business.contact.instagram}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ListItem
									icon={InstagramIcon}
									button
									primaryText="Instagram"
								/>
							</a>
						)}
					</Card>
					<h3 class="text-2xl font-bold">
						Description
					</h3>
					<p>
						{props.data.business.description}
					</p>
					<ul>
						<h3 class="text-xl font-bold">
							Other ways of contact
						</h3>
						{props.data.business.contact?.phone && (
							<a
								href={`tel:${props.data.business.contact.phone}`}
							>
								<ListItem
									primaryText="Phone"
									secondaryText={props.data.business.contact
										.phone}
									icon={PhoneIcon}
									button
								/>
							</a>
						)}
						{props.data.business.contact?.email && (
							<a
								href={`mailto:${props.data.business.contact.email}`}
							>
								<ListItem
									primaryText="Email"
									secondaryText={props.data.business.contact
										.email}
									icon={MailIcon}
									button
								/>
							</a>
						)}
					</ul>
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
	const business = await sanityClient.fetch(
		`*[_type == "business" && !(_id in path("drafts.**")) && slug.current == $slug][0] { ..., cover { ..., asset -> { ..., metadata } } }`,
		{ slug },
	);

	if (!business) {
		ctx.renderNotFound();
	}

	return ctx.render({
		slug,
		business,
	});
};
