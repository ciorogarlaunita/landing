import { CardProps as DCardProps, Card as DCard } from "react-daisyui";


export interface CardProps extends DCardProps {
	disabled?: boolean;
}


function Card(props: CardProps) {
	return (
		<DCard
			{...props}
			className={`${
				props.disabled ? "opacity-50 cursor-not-allowed" : ""} 
				bg-primary-lighter
				dark:bg-primary-darker
				${props.className}
			`}
		/>
	)
}

Card.Body = DCard.Body;
Card.Title = DCard.Title;
Card.Image = DCard.Image;
Card.Actions = DCard.Actions;

export default Card;
