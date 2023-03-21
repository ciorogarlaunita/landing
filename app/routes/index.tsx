import Container from "@/components/Container.tsx";
import Stack from "@/components/Stack.tsx";
import Card from "@/components/Card.tsx";

import BoltIcon from "tabler-icons/bolt.tsx";
import ChecksIcon from "tabler-icons/checks.tsx";
import LockOpenIcon from "tabler-icons/lock-open.tsx";
import ShieldIcon from "tabler-icons/shield-checkered.tsx";
import Button from "../components/Button.tsx";


export default function HomePage() {
	return (
		<>
			<div class="bg-[url('/decorations/blob-scatter.svg')] bg-contain">
				<Container>
					<Stack>
						<div class="mt-4 flex flex-col text-center gap-2 justify-center items-center" >
							<img
								alt="Ciorogarla Unita Logo"
								src="/android-chrome-512x512.png"
								class="w-64 h-64 rounded-full"
							/>
							<h1 class="text-4xl font-bold">Ciorogârla Unită</h1>
							<p>
								Hai să ne modernizăm!
							</p>
							<a
								href="/app"
							>
								<Button>
									Deschide aplicația
								</Button>
							</a>
						</div>
						<div
							class="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-2"
						>
							<Card>
								<h2 class="text-2xl font-bold">
									Misiunea noastra
								</h2>
								<p>
									Lumea noastră este într-o continuă schimbare, iar
									tehnologia avansează într-un ritm accelerat. În
									această situație, este important să ne modernizăm
									pentru a ne adapta la schimbări și a ne asigura
									un viitor mai bun pentru comunitatea noastră.
								</p>
							</Card>
							<Card>
								<h2 class="text-2xl font-bold">
									Cum o vom face?
								</h2>
								<p>
									Ciorogârla Unită este o platforma comunitară
									care va oferi o gamă largă de servicii pentru 
									bunăstarea comunității noastre. Acestea vor
									include dar nu sunt limitate la: 
										<b>calendar de evenimente</b>,
										<b>listă de afaceri locale</b>,
										<b>listă de poziții libere de muncă</b>,
										<b>oferte de voluntariat</b>,
										<b>forum</b>,
										<b>știri</b>,
								</p>
							</Card>
						</div>
					</Stack>
				</Container>
			</div>
			<Container>
				<Stack class="mt-2">
					<h3
						class="text-3xl font-bold"
					>
						Să avem încredere?
					</h3>
					<div
						class="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-2"
					>
						<Card class="!bg-yellow-500 !text-dark">
							<BoltIcon size={64} />
							<h2 class="text-2xl font-bold">
								Rapid
							</h2>
							<p>
								Folosim o arhitectură eficientă combinată cu tehnologie
								nouă și rapidă. Așa menținem platforma cât mai performanță
								și eficientă posibil.
							</p>
						</Card>
						<Card class="!bg-lime-500 !text-dark">
							<ChecksIcon size={64} />
							<h2 class="text-2xl font-bold">
								Verificat
							</h2>
							<p>
								Conținutul nostru și conținutul postat de către alți
								cetățeni sunt verificate calitativ de către un sistem AI.
							</p>
						</Card>
						<Card class="!bg-blue-500 !text-dark">
							<LockOpenIcon size={64} />
							<h2 class="text-2xl font-bold">
								Deschis
							</h2>
							<p>
								Platforma este liberă și accesibilă. Depunem tot efortul
								că interfață să fie cât mai ușor de folosit, iar întregul cod sursă
								este disponibil pe GitHub.
							</p>
						</Card>
						<Card class="!bg-red-500 !text-dark">
							<ShieldIcon size={64} />
							<h2 class="text-2xl font-bold">
								Sigur
							</h2>
							<p>
								Ciorogârla Unită este construită cu cele mai bune practici 
								de securitate și confidențialitate. Noi nu va vindem datele
								personale.
							</p>
						</Card>
					</div>
				</Stack>
			</Container>
		</>
	);
}
