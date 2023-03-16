export interface CardProps {
	disabled?: boolean
}

export default function Card(props: CardProps & JSX.IntrinsicElements['div']) {
	return (
		<div
			{...props}
			className={`
				shadow 
				rounded 
				overflow-hidden 
				p-4
				bg-primary-lighter
				${props.disabled ? 'disabled' : ''} 
				${props.className || ''} 
			`}
		/>
	)
}
