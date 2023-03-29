import { JSX } from "preact";

export interface CardProps {
	disabled?: boolean;
	noPadding?: boolean;
}


export default function Card(props: CardProps & JSX.IntrinsicElements["div"]) {
	return (
		<div
			{...props}
			class={`${
				props.disabled ? "opacity-50 cursor-not-allowed" : ""
			} 
				${!props.noPadding ? "p-6" : ""} rounded
				bg-primary-lighter
				dark:bg-primary-darker
				${props.class || ""}
			`}
		/>
	);
}
