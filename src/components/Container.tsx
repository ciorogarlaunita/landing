export default function Container(props: JSX.IntrinsicElements['div']) {
	return (
		<div
			{...props}
			className={`${props.className || ''} px-4 max-w-2xl mx-auto`}
		/>
	)
}
