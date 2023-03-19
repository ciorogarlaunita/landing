import { Handler, PageProps } from "$fresh/server.ts";
import Container from "@/components/Container.tsx";
import Card from "@/components/Card.tsx";
import Header from "@/components/Header.tsx";
import Navbar from "@/islands/Navbar.tsx";
import Stack from "@/components/Stack.tsx";
import WeatherWidget, { WeatherWidgetProps } from "@/components/WeatherWidget.tsx";
import Chip from "@/components/Chip.tsx";

import BriefcaseIcon from "tabler-icons/briefcase.tsx";
import NewspaperIcon from "tabler-icons/news.tsx";
import EventIcon from "tabler-icons/calendar-event.tsx";
import WorkIcon from "tabler-icons/building-community.tsx";
import PeopleIcon from "tabler-icons/users.tsx";

const modules = [
	{
		name: "Businesses",
		description: "Explore businesses in Ciorogarla",
		icon: BriefcaseIcon,
		link: "/business",
	},
	{
		name: "Newspaper",
		description: "Read the latest news from Ciorogarla",
		icon: NewspaperIcon,
		disabled: true,
	},
	{
		name: "Events",
		description: "Find out what's happening in Ciorogarla",
		icon: EventIcon,
		disabled: true,
	},
	{
		name: "Jobs",
		description: "Find a job in Ciorogarla",
		icon: WorkIcon,
		disabled: true,
	},
	{
		name: "Volunteering",
		description: "Find a volunteering opportunity in Ciorogarla",
		icon: PeopleIcon,
		disabled: true,
	}
];

interface DataProps {
	weatherData: WeatherWidgetProps["weatherData"];
}

export default function Home(props: PageProps<DataProps>) {
	return (
		<Container>
			<Navbar />
			<Stack>
				<div
					className="flex flex-col md:flex-row justify-between items-center"
				>
					<Header>
						Good day!
					</Header>
					<WeatherWidget
						weatherData={props.data.weatherData}
						className="mt-0 md:mt-4"
					/>
				</div>
				<div
					className="grid grid-cols-1 md:grid-cols-3 gap-4"
				>
					{modules.map((module) => (
						<a href={module?.link || ""} key={module.name} className="block">
							<Card disabled={module.disabled} className={!module.disabled ? "button-animation" : ""}>
								<module.icon/>
								{module.disabled ?
									<Chip>
										Coming soon
									</Chip>
								: null}
								<h2 className="text-2xl">
									{module.name}
								</h2>
								<p className="opacity-50">
									{module.description}
								</p>
							</Card>
						</a>
					))}
				</div>
			</Stack>
		</Container>
	)
}

const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=44.44&longitude=25.88&current_weather=true&forecast_days=1&timezone=Europe%2FBucharest";

export const handler: Handler = async (_, ctx) => {
	const res = await fetch(weatherUrl).catch((err) => {
		console.error(err);
		return null;
	});

	if (!res) {
		return ctx.render();
	}

	const data = await res.json();

	return ctx.render({
		weatherData: data
	});
}
