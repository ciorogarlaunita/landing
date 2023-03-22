import Container from "@/components/Container.tsx";
import Stack from "@/components/Stack.tsx";
import Card from "@/components/Card.tsx";
import Button from "@/components/Button.tsx";

import BoltIcon from "tabler-icons/bolt.tsx";
import ChecksIcon from "tabler-icons/checks.tsx";
import LockOpenIcon from "tabler-icons/lock-open.tsx";
import ShieldIcon from "tabler-icons/shield-checkered.tsx";
import DownArrowIcon from "tabler-icons/arrow-big-down-line.tsx";
import InstagramIcon from "tabler-icons/brand-instagram.tsx";
import FacebookIcon from "tabler-icons/brand-facebook.tsx";
import GitHubIcon from "tabler-icons/brand-github.tsx";


export default function HomePage() {
	return (
		<>
			<div class="bg-[url('/decorations/blob-scene-light.svg')] dark:bg-[url('/decorations/blob-scene-dark.svg')] bg-cover bg-no-repeat bg-center h-screen rounded">
				<Container>
					<Stack>
						<div class="relative mt-4 flex flex-col text-center gap-2 justify-center items-center align-center h-screen" >
							<img
								alt="Ciorogarla Unita Logo"
								src="/android-chrome-512x512.png"
								class="w-64 h-64 rounded-full"
							/>
							<h1
								class="text-5xl font-bold"
							>
								Hai să ne <span class="text-transparent bg-clip-text bg-gradient-to-br from-primary-dark via-primary to-primary-light">modernizăm</span>!
							</h1>
							<Button
								disabled
							>
								În curând...
							</Button>
							<div class="absolute bottom-6 opacity-75 flex flex-col justify-center items-center">
								<p class="font-bold text-center">
									Sună interesant? Dă mai in jos!
								</p>
								<DownArrowIcon />
							</div>
						</div>
					</Stack>
				</Container>
			</div>
			<Container>
				<Stack class="mt-2">
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
									<b>calendar de evenimente</b>,{" "}
									<b>listă de afaceri locale</b>,{" "}
									<b>listă de poziții libere de muncă</b>,{" "}
									<b>oferte de voluntariat</b>,{" "}
									<b>forum</b>,{" "}
									<b>știri</b>.
							</p>
						</Card>
					</div>
					<h3
						class="text-3xl font-bold"
					>
						Unde vă găsesc?
					</h3>
					<div class="grid grid-cols-2 md:grid-cols-3 gap-1 justify-center">
						<a
							href="https://facebook.com/ciorogarlaunita"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								class="w-full"
								startIcon={FacebookIcon}
							>
								Facebook
							</Button>
						</a>
						<a
							href="https://facebook.com/ciorogarlaunita"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								class="w-full"
								startIcon={InstagramIcon}
							>
								Instagram
							</Button>
						</a>
						<a
							href="https://github.com/ciorogarlaunita"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								class="w-full"
								startIcon={GitHubIcon}
							>
								GitHub
							</Button>
						</a>
					</div>
					<h3
						class="text-3xl font-bold"
					>
						Să avem încredere?
					</h3>
					<div
						class="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-2"
					>
						<Card class="!bg-yellow-500 !text-dark md:col-span-2">
							<BoltIcon size={64} />
							<h2 class="text-2xl font-bold">
								Rapid
							</h2>
							<p>
								Folosim o arhitectură eficientă combinată cu tehnologie
								nouă și rapidă. Așa menținem platforma cât mai performantă
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
								ca interfața să fie cât mai ușor de folosit, iar întregul cod sursă
								este disponibil pe GitHub.
							</p>
						</Card>
						<Card class="!bg-red-500 !text-dark md:col-span-2">
							<ShieldIcon size={64} />
							<h2 class="text-2xl font-bold">
								Sigur
							</h2>
							<p>
								Ciorogârla Unită este construită cu cele mai bune practici 
								de securitate și confidențialitate. Noi nu vă vindem datele
								personale.
							</p>
						</Card>
					</div>
				</Stack>
			</Container>
		</>
	);
}
