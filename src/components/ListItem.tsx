import Image from "next/image";

export interface ListItemProps {
	avatar?: string;
	primaryText: string;
	secondaryText?: string;
	button?: boolean;
}

export default function ListItem(props: ListItemProps & JSX.IntrinsicElements["li"]) {
	return (
		<li
			className={`
				${props.className}
				px-4 py-2
				rounded
				${props.button ? "hover-effect" : ""}
			`}
		>
			<div className="flex items-center">
				{props.avatar && (
					<Image
						src={props.avatar}
						alt={props.primaryText}
						width={40}
						height={40}
						className="rounded-full"
					/>
				)}
				<div className="ml-4">
					<h3 className="text-lg font-medium">{props.primaryText}</h3>
					{props.secondaryText && (
						<p className="text-sm text-gray-500">{props.secondaryText}</p>
					)}
				</div>
			</div>
		</li>
	)
}
