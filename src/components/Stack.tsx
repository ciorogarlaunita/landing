export default function Stack(props: JSX.IntrinsicElements['div']) {
	return (
		<div
			{...props}
			className={`${props.className || ''} flex flex-col space-y-4`}
		/>
	)
}
