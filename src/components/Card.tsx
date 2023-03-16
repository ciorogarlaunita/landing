export default function Card(props: JSX.IntrinsicElements['div']) {
	return (
		<div
			{...props}
			className={`${props.className || ''} shadow rounded overflow-hidden bg-primary-lighter p-4`}
		/>
	)
}
