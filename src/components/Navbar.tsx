import {useScrollTrigger} from "@/hooks/useScrollTrigger";
import Image from "next/image";
import {useRouter} from "next/router";
import Icon from "./Icon";

export interface NavbarProps {
	back?: boolean;
	title?: string;
	noGutter?: boolean;
}

export default function Navbar(props: NavbarProps) {
	const triggered = useScrollTrigger({ threshold: 64 });
	const router = useRouter();

	return (
		<>
			<div 
				className={`
					flex flex-row items-center
					fixed p-2 top-0 left-0 right-0 
					w-full z-50 transition-colors 
					${triggered ? "bg-light dark:bg-dark shadow" : ""}
				`}
				style={{
					paddingTop: "calc(env(safe-area-inset-top) + 8px)",
				}}
			>
				{props.back ? (
					<button 
						onClick={router.back}
						className="p-2"
					>
						<Icon 
							name="arrow_back"
							className="!text-2xl font-bold"
						/>
					</button>
				) : (
					<div
						className="flex flex-row items-center gap-2 ml-2"
					>
						<Image
							src="/android-chrome-192x192.png"
							alt="Ciorogarla Unita Logo"
							className="rounded-full"
							width={32}
							height={32}
						/>
						<p className="font-bold">
							Ciorogarla Unita
						</p>
					</div>
				)}
				{props.title ? (
					<p className={`font-bold transition-opacity ${triggered ? "opacity-1" : "opacity-0"}`}>
						{props.title}
					</p>
				) : null}
			</div>
			{!props.noGutter ? <div className="h-16" /> : null}
		</>
	)
}
