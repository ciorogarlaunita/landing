import Icon from "./Icon";

export interface ButtonProps {
	disabled?: boolean;
	icon?: string;
}

export default function Button(props: ButtonProps & JSX.IntrinsicElements["button"]) {
	return (
		<button
			className={`
				${props.disabled ? "opacity-50 cursor-not-allowed" : ""}
				px-4 py-2 rounded
				bg-primary-light
				dark:bg-primary-dark
				button-animation
				${props.className}
			`}
		>
			<div className="flex flex-row gap-2 items-center justify-center text-center">
				{props.icon ? <Icon name={props.icon}/> : null}
				{props.children}
			</div>
		</button>
	)
}
