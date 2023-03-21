import BriefcaseIcon from "tabler-icons/briefcase.tsx";
import NewspaperIcon from "tabler-icons/news.tsx";
import EventIcon from "tabler-icons/calendar-event.tsx";
import WorkIcon from "tabler-icons/building-community.tsx";
import PeopleIcon from "tabler-icons/users.tsx";

export const modules = [
	{
		name: "Businesses",
		description: "Explore businesses in Ciorogarla",
		icon: BriefcaseIcon,
		link: "/app/business",
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
	},
];
