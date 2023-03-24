import { useState, useMemo } from "preact/hooks";
import { Message } from "@/types/Chat.ts";
import { JSX } from "preact/jsx-runtime";

export default function Chat() {
	const [chat, setChat] = useState<Message[]>([
		{role: "system", content: "You are a cool assistant!"},
		{role: "assistant", content: "Buna! Cu ce va pot ajuta?"},
		{role: "user", content: "Buna!"},
	]);

	const messages = useMemo(() => {
		return chat.filter((message) => message.role !== "system");
	}, [chat]);

	return (
		<>
			<div class="flex flex-col justify-end h-full pb-16">
				{messages.map((message) => (
					<Message
						key={message.content.slice(0, 10)}
						{...message}
					/>
				))}
			</div>
			<form 
				class="absolute bottom-2 left-2 right-2"
				onSubmit={(e) => e.preventDefault()}
			>
				<Input
					placeholder="Type a message..."
				/>
			</form>
		</>
	)
}

function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
	return (
		<input
			class="w-full h-12 px-4 py-2 rounded-full border border-dark dark:border-light shadow-lg"
			{...props}
		/>
	)
}

function Message(props: Message) {
	return (
		<div
			class={`
				rounded-full
				px-4 py-2
				max-w-[75vw]
				${props.role === "user" 
					? "ml-auto border border-dark dark:border-light" 
					: "mr-auto bg-primary-light dark:bg-primary-dark"
				}
			`}
		>
			{props.content}
		</div>
	)
}
