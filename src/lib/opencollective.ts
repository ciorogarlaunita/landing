import { MembersProps } from "@components/Members.tsx";

const OPENCOLLECTIVE_API_ENDPOINT = "https://opencollective.com/ciorogarlaunita/members/users.json";

export const getMembers = async (): Promise<MembersProps["members"] | undefined>  => {
	return await fetch(OPENCOLLECTIVE_API_ENDPOINT)
		.then(res => res.json())
		.catch(() => undefined)
}
