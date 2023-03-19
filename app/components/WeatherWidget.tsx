import { JSX } from "preact";

import SunIcon from "tabler-icons/sun.tsx";
import CloudIcon from "tabler-icons/cloud.tsx";
import FogIcon from "tabler-icons/mist.tsx";
import RainIcon from "tabler-icons/cloud-rain.tsx";
import SnowIcon from "tabler-icons/cloud-snow.tsx";
import StormIcon from "tabler-icons/cloud-storm.tsx";

export interface WeatherWidgetProps {
	weatherData: {
		current_weather: {
			temperature: number
			weathercode: number
		}
	} | null
}

// we are using material icons
// and also we use WMO codes for weather
const convertWeatherCodeToIcon = (code: number) => {
	if (code === 0 || code === 1) {
		return SunIcon
	}

	if (code >= 2 && code <= 3) {
		return CloudIcon
	}

	if (code >= 45 && code <= 48) {
		return FogIcon
	}

	if (code >= 61 && code <= 67) {
		return RainIcon
	}

	if (code >= 71 && code <= 77) {
		return SnowIcon
	}

	if (code >= 80 && code <= 82) {
		return StormIcon
	}

	if (code >= 85 && code <= 86) {
		return SnowIcon
	}

	if (code >= 95 && code <= 99) {
		return StormIcon
	}

	return SunIcon
}

export default function WeatherWidget(props: WeatherWidgetProps & JSX.IntrinsicElements["div"]) {
	if (!props.weatherData) return null;
	const IconElement = convertWeatherCodeToIcon(props.weatherData.current_weather.weathercode);

	return props.weatherData?.current_weather ? (
		<div className={`${props.className || ""} flex flex-col items-center`}>
			<IconElement size={48} />
			<p className="text-2xl">{props.weatherData.current_weather.temperature.toFixed(0)}°C</p>
			<p className="opacity-50">Ciorogarla</p>
		</div>
	) : null;
}
