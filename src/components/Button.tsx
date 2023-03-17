export default function Button(props: JSX.IntrinsicElements["button"]) {
	return (
		<button
			{...props}
			className={`
				${props.className || ""} 
				bg-primary-light 
				text-light 
				font-bold 
				py-2 px-4 
				rounded 
				shadow 
				hover-effect
				dark:bg-primary-dark
			`}
		/>
	)
}
