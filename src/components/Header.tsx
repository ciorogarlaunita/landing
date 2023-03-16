export default function Header(props: JSX.IntrinsicElements["h1"]) {
	return (
		<h1
			{...props}
			className={`${props.className || ""} font-bold text-5xl mt-16`}
		/>
	);
}
