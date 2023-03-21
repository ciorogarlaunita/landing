import { JSX } from "preact";

export interface CardProps {
	disabled?: boolean;
	noPadding?: boolean;
}

function Card(props: CardProps & JSX.IntrinsicElements["div"]) {
	return (
		<div
			{...props}
			className={`${
				props.disabled ? "opacity-50 cursor-not-allowed" : ""
			} 
				${!props.noPadding ? "p-6" : ""} rounded
				bg-primary-lighter
				dark:bg-primary-darker
				${props.className || ""}
			`}
		/>
	);
}

export default Card;
