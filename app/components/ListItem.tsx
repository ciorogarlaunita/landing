import { FunctionalComponent, JSX } from "preact";

export interface ListItemProps {
	avatar?: string;
	icon?: FunctionalComponent<{ size: number }>;
	primaryText?: string;
	secondaryText?: string;
	button?: boolean;
	class?: string;
}

export default function ListItem(props: ListItemProps) {
	const Element = props.button ? "button" : "li";

	return (
		<Element
			className={`
				${props.class || ""}
				p-4
				rounded
				block w-full
				text-start
				${props.button ? "button-animation" : ""}
			`}
		>
			<div className="flex items-center">
				{props.avatar && !props.icon && (
					<img
						src={props.avatar}
						alt={props.primaryText}
						width={48}
						height={48}
						className="rounded-sm w-12 h-12"
					/>
				)}
				{props.icon && !props.avatar && <props.icon size={28} />}
				<div className="ml-4">
					<h3 className="text-md font-medium">{props.primaryText}</h3>
					{props.secondaryText && (
						<p className="text-sm opacity-50">
							{props.secondaryText}
						</p>
					)}
				</div>
			</div>
		</Element>
	);
}
