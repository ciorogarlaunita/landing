import Image from "next/image";

export interface ListItemProps {
	avatar?: string;
	primaryText: string;
	secondaryText?: string;
	button?: boolean;
}

export default function ListItem(props: ListItemProps & JSX.IntrinsicElements["li"]) {
	const Element = props.button ? "button" : "li";

	return (
		<Element
			className={`
				${props.className || ""}
				px-4 py-2
				rounded
				block w-full
				text-start
				${props.button ? "button-animation" : ""}
			`}
		>
			<div className="flex items-center">
				{props.avatar && (
					<Image
						src={props.avatar}
						alt={props.primaryText}
						width={64}
						height={64}
						className="rounded w-16 h-16"
					/>
				)}
				<div className="ml-4">
					<h3 className="text-lg font-medium">{props.primaryText}</h3>
					{props.secondaryText && (
						<p className="text-sm text-gray-500">{props.secondaryText}</p>
					)}
				</div>
			</div>
		</Element>
	)
}
