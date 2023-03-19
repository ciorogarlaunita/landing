import { JSX } from "preact";

export interface ButtonProps {
	disabled?: boolean;
	// deno-lint-ignore no-explicit-any
	icon?: any;
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
			<div className="flex flex-row gap-1 items-center justify-center text-center">
				{props.icon ? <props.icon size={18} /> : null}
				{props.children}
			</div>
		</button>
	)
}
