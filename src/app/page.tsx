import Card from "@/components/Card";
import Chip from "@/components/Chip";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import Stack from "@/components/Stack";
import WeatherWidget, { WeatherWidgetProps } from "@/components/WeatherWidget";
import Link from "next/link";

const modules = [
	{
		name: "Businesses",
		description: "Explore businesses in Ciorogarla",
		icon: "storefront",
		link: "/businesses",
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

const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&forecast_days=1&timezone=Europe%2FBucharest";

export default async function Home() {
	const weatherData = await fetch(weatherUrl)
		.then((res) => res.json() as unknown as WeatherWidgetProps["data"])
		.catch((err) => {
			console.error(err);
			return null;
		});


	return (
		<Container>
			<Stack>
				<div
					className="flex flex-col md:flex-row justify-between items-center"
				>
					<Header>
						Good day!
					</Header>
					<WeatherWidget
						data={weatherData}
						className="mt-0 md:mt-4"
					/>
				</div>
				<div
					className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
				>
					{modules.map((module) => (
						<Link href={module?.link || ""} key={module.name}>
							<Card disabled={module.disabled} className="hover-effect">
								
								<Icon
									name={module.icon}
									className="!text-2xl"
								/>{" "}
								{module.disabled ?
									<Chip>
										Coming soon
									</Chip>
								: null}
								<h2
									className="text-2xl"
								>
									{module.name}
								</h2>
								<p
									className="opacity-50"
								>
									{module.description}
								</p>
							</Card>
						</Link>
					))}
				</div>
			</Stack>
		</Container>
	)
}
