import {useScrollTrigger} from "@/hooks/useScrollTrigger";
import Image from "next/image";
import {useRouter} from "next/router";
import { Button, Navbar as DNavbar } from "react-daisyui";
import Icon from "./Icon";

export interface NavbarProps {
	back?: boolean;
	title?: string;
}

export default function Navbar(props: NavbarProps) {
	const triggered = useScrollTrigger({ threshold: 64 });
	const router = useRouter();

	return (
		<>
			<DNavbar 
				className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors pt-[env(safe-area-inset-top)] ${triggered ? "bg-light dark:bg-dark shadow" : ""}`}
			>
				<DNavbar.Start>
					{props.back ? (
						<Button 
							color="ghost"
							onClick={router.back}
						>
							<Icon 
								name="arrow_back"
								className="!text-2xl font-bold"
							/>
						</Button>
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
				</DNavbar.Start>
			</DNavbar>
			<div className="h-16" />
		</>
	)
}
