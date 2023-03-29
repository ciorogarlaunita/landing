import { PageData } from "lume/core.ts";
import { MembersProps } from "@components/Members.tsx";

export interface CustomPageData extends PageData {
	members: MembersProps["members"] | undefined;
}
