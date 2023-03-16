import Icon from "./Icon"

export interface WeatherWidgetProps {
	data: {
		current_weather: {
			temperature: number
			weather_code: number
		}
	} | null
}

// we are using material icons
// and also we use WMO codes for weather
const convertWeatherCodeToIcon = (code: number) => {
	if (code === 0) {
		return 'clear_day'
	}

	if (code >= 1 && code <= 3) {
		return "cloudy"
	}

	if (code >= 45 && code <= 48) {
		return "water" // We don't have a better icon for this
	}

	if (code >= 61 && code <= 67) {
		return "rainy"
	}

	if (code >= 71 && code <= 77) {
		return "cloudy_snowing"
	}

	if (code >= 80 && code <= 82) {
		return "rainy"
	}

	if (code >= 85 && code <= 86) {
		return "cloudy_snowing"
	}

	if (code >= 95 && code <= 99) {
		return "thunderstorm"
	}

	return "clear_day"
}

export default function WeatherWidget(props: WeatherWidgetProps & JSX.IntrinsicElements["div"]) {
	return props.data?.current_weather ? (
		<div className={`${props.className || ""} flex flex-col items-center`}>
			<Icon 
				name={convertWeatherCodeToIcon(props.data.current_weather.weather_code)}
				className="text-6xl"
			/>
			<p className="text-2xl">{props.data.current_weather.temperature.toFixed(0)}°C</p>
			<p className="opacity-50">Ciorogarla</p>
		</div>
	) : null;
}