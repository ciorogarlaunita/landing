import { JSX } from "preact";

export default function Header(props: JSX.IntrinsicElements["h1"]) {
	return (
		<h1
			{...props}
			className={`font-bold text-5xl mt-8 md:mt-2 ${
				props.className || ""
			}`}
		/>
	);
}
