export interface CardProps {
	disabled?: boolean;
}


function Card(props: CardProps & JSX.IntrinsicElements["div"]) {
	return (
		<div
			{...props}
			className={`${
				props.disabled ? "opacity-50 cursor-not-allowed" : ""} 
				p-6 rounded
				bg-primary-lighter
				dark:bg-primary-darker
				${props.className}
			`}
		/>
	)
}

export default Card;
