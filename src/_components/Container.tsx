import { JSX } from "preact";

export default function Container(props: JSX.IntrinsicElements["div"]) {
	return (
		<div
			{...props}
			className={`px-4 max-w-screen-lg w-full mx-auto ${props.class || ""}`}
		/>
	);
}
