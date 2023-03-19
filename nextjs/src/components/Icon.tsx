
export interface IconProps {
	name: string
}

export default function Icon(props: IconProps & JSX.IntrinsicElements["span"]) {
	return (
		<span
			className={`material-symbols-outlined inline-block text-base align-bottom ${props.className || ""}`}
		>
			{props.name}
		</span>
	);
}
