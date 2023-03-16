
export interface IconProps {
	name: string
}

export default function Icon(props: IconProps & JSX.IntrinsicElements["span"]) {
	return (
		<span
			{...props}
			className={`material-symbols-outlined inline-block text-base align-middle ${props.className || ""}`}
		>
			{props.name}
		</span>
	);
}
