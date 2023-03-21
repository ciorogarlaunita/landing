import { urlFor } from "@/lib/sanity.ts";
import { Business } from "@/types/SanitySchema.ts";

export interface HeaderProps {
	logo?: Business["logo"];
	cover?: Business["cover"];
	title?: string;
}

export default function Header(props: HeaderProps) {
	return (
		<div className="relative mb-[64px]">
			{props.cover && (
				<div className="h-32 w-full relative">
					<img
						src={urlFor(props.cover).maxHeight(128).url()}
						alt="Cover Image"
						placeholder="blur"
						class="w-full object-cover h-32"
						style={{
							objectPosition: `${
								(props.cover.hotspot?.x ?? 0) * 100
							}% ${(props.cover.hotspot?.y ?? 0) * 100}%`,
						}}
						//@ts-ignore: trust me it's there
						blurDataURL={props.cover.asset.metadata.lqip}
					/>
				</div>
			)}
			<div className="flex items-center justify-center absolute top-20 w-full">
				<img
					src={urlFor(props.logo).width(128).height(128).url()}
					alt="Logo"
					className="bg-light dark:bg-dark rounded p-1"
					width={96}
					height={96}
				/>
			</div>
		</div>
	);
}
