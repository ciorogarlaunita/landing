import { JSX } from "preact";

export default function Stack(props: JSX.IntrinsicElements["div"]) {
	return (
		<div
			{...props}
			class={`flex flex-col space-y-4 ${props.class || ""}`}
		/>
	);
}
