import Container from "@/components/Container.tsx";
import Navbar from "@/islands/Navbar.tsx";
import Chat from "@/islands/Chat.tsx";

export default function Assistant() {
	return (
		<Container class="h-full">
			<Navbar 
				back
				noGutter
			/>
			<Chat />
		</Container>
	)
}
