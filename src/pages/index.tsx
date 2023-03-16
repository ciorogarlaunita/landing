import Card from "@/components/Card";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import Stack from "@/components/Stack";
import Head from "next/head";

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Ciorogarla Unita</title>
			</Head>
			<Stack>
				<Header>
					Hello world
				</Header>
				<Card>
					<p>
						<Icon name="waving_hand" />{" "}
						Hello world
					</p>
				</Card>
			</Stack>
		</Container>
	)
}
