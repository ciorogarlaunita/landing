import { FunctionalComponent, JSX } from "preact";

export interface ButtonProps {
	disabled?: boolean;
	startIcon?: FunctionalComponent<{ size: number }>;
}

export default function Button(props: ButtonProps & JSX.IntrinsicElements["button"]) {
	return (
		<button
			class={`
				${props.disabled ? "opacity-50 cursor-not-allowed" : ""}
				px-4 py-2 rounded
				bg-primary
				dark:bg-primary-dark
				button-animation
				${props.class || ""}
			`}
		>
			<div class="flex flex-row gap-1 items-center justify-center text-center">
				{props.startIcon ? <props.startIcon size={18} /> : null}
				{props.children}
			</div>
		</button>
	)
}
