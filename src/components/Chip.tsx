export default function Chip(props: JSX.IntrinsicElements["span"]) {
	return (
		<span
			className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
		>
			{props.children}
		</span>
	)
			
}
