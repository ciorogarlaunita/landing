import { Business } from "@/types/SanitySchema.ts";

import ShoppingCardIcon from "tabler-icons/shopping-cart.tsx";
import CoffeeIcon from "tabler-icons/coffee.tsx";
import SoupIcon from "tabler-icons/soup.tsx";
import BeerIcon from "tabler-icons/beer.tsx";
import PizzaIcon from "tabler-icons/pizza.tsx";
import CarIcon from "tabler-icons/car.tsx";
import RazorElectricIcon from "tabler-icons/razor-electric.tsx";

export const getMapLink = (lat: number, long: number) => {
	return `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;
};

export const getBusinessType = (type: Business["type"]) => {
	switch (type) {
		case "market":
			return {
				icon: ShoppingCardIcon,
				text: "Market",
			};
		case "cafe":
			return {
				icon: CoffeeIcon,
				text: "Cafe",
			};
		case "itp":
			return {
				icon: CarIcon,
				text: "ITP",
			};
		case "barbershop":
			return {
				icon: RazorElectricIcon,
				text: "Barbershop",
			};
		case "restaurant":
			return {
				icon: SoupIcon,
				text: "Restaurant",
			};
		case "pub":
			return {
				icon: BeerIcon,
				text: "Pub",
			};
		case "pizza":
			return {
				icon: PizzaIcon,
				text: "Pizza",
			};
		default:
			return {
				icon: ShoppingCardIcon,
				text: "Market",
			};
	}
};
