export default function Chip(props: JSX.IntrinsicElements["div"]) {
	return (
		<div
			{...props}
			className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ${props.className || ""}`}
		/>
	)
}