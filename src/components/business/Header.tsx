import {urlFor} from "@/lib/sanity";
import {Business} from "@/types/SanitySchema";
import Image from "next/image";

export interface HeaderProps {
	logo?: Business["logo"];
	cover?: Business["cover"];
	title?: string;
}


export default function Header(props: HeaderProps) {
	return (
		<div className="relative mb-16">
			{props.cover && (
				<div className="h-32 w-full relative">
					<Image 
						src={urlFor(props.cover).maxHeight(128).url()}
						loader={({ width }) => urlFor(props.cover).width(width).maxHeight(128).url()}
						alt="Cover Image"
						fill
						placeholder="blur"
						style={{
							objectFit: "cover",
							objectPosition: `${(props.cover.hotspot?.x ?? 0) * 100}% ${(props.cover.hotspot?.y ?? 0) * 100}%`,
						}}
						//@ts-ignore: trust me it's there
						blurDataURL={props.cover.asset.metadata.lqip}
					/>
				</div>
			)}
			<div className="flex flex-row gap-2 items-center absolute top-20 px-4 w-full">
				<Image
					src={urlFor(props.logo).width(96).height(96).url()}
					alt="Logo"
					className="bg-light dark:bg-dark rounded p-1"
					width={96}
					height={96}
				/>
				<h1
					className="font-bold text-3xl bg-light dark:bg-dark rounded p-1 flex-1"
				>
					{props.title}
				</h1>
			</div>
		</div>
	);
}
