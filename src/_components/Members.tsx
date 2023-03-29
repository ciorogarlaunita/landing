export interface MembersProps {
	members?: {
		image: string;
		name: string;
	}[];
}

export default function Members(props: MembersProps) {
	const { members } = props;

	if (!members) return null;

	return (
		<div class="flex flex-row justify-center items-center gap-2 flex-wrap">
			{members.map((member) => (
				<div class="flex flex-col items-center border rounded p-2 text-center gap-2 shrink-0">
					<img 
						src={member.image}
						alt={member.name}
						class="rounded w-32 h-32 object-cover"
					/>
					<p>{member.name}</p>
				</div>
			))}
		</div>
	)
}
