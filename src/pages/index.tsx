import Container from "@/components/Container";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import Stack from "@/components/Stack";
import WeatherWidget, { WeatherWidgetProps } from "@/components/WeatherWidget";
import Head from "next/head";
import Link from "next/link";
import { Badge } from "react-daisyui";
import {GetStaticProps} from "next";

const modules = [
	{
		name: "Businesses",
		description: "Explore businesses in Ciorogarla",
		icon: "storefront",
		link: "/business",
	},
	{
		name: "Newspaper",
		description: "Read the latest news from Ciorogarla",
		icon: "newspaper",
		disabled: true,
	},
	{
		name: "Events",
		description: "Find out what's happening in Ciorogarla",
		icon: "event",
		disabled: true,
	},
	{
		name: "Jobs",
		description: "Find a job in Ciorogarla",
		icon: "work",
		disabled: true,
	},
	{
		name: "Volunteering",
		description: "Find a volunteering opportunity in Ciorogarla",
		icon: "people",
		disabled: true,
	}
];

interface DataProps {
	weatherData: WeatherWidgetProps["data"]
}

export default function Home(props: DataProps) {
	return (
		<Container>
			<Head>
				<title>Ciorogarla Unita</title>
			</Head>
			<Stack>
				<div
					className="flex flex-col md:flex-row justify-between items-center"
				>
					<Header>
						Good day!
					</Header>
					<WeatherWidget
						data={props.weatherData}
						className="mt-0 md:mt-4"
					/>
				</div>
				<div
					className="grid grid-cols-1 md:grid-cols-3 gap-4"
				>
					{modules.map((module) => (
						<Link href={module?.link || ""} key={module.name} className="block">
							<Card disabled={module.disabled} className="button-animation">
								<Card.Body>
									<Icon
										name={module.icon}
										className="!text-2xl"
									/>
									{module.disabled ?
										<Badge>
											Coming soon
										</Badge>
									: null}
									<h2 className="text-2xl">
										{module.name}
									</h2>
									<p className="opacity-50">
										{module.description}
									</p>
								</Card.Body>
							</Card>
						</Link>
					))}
				</div>
			</Stack>
		</Container>
	)
}

const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=44.44&longitude=25.88&current_weather=true&forecast_days=1&timezone=Europe%2FBucharest";

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(weatherUrl).catch((err) => {
		console.error(err);
		return null;
	});

	if (!res) {
		return {
			props: {
				weatherData: null
			},
			revalidate: 15
		}
	}

	const data = await res.json();

	return {
		props: {
			weatherData: data
		},
		revalidate: 30 * 60
	}
}
