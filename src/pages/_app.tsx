import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google"

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-poppins"
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover, user-scalable=0"/>
				<title>Ciorogârla Unită</title>
			</Head>
			<main className={`${poppins.variable} font-sans min-h-screen flex flex-col`}>
				<Component {...pageProps} />
				<Footer />
				{process.env.NODE_ENV === "production" ? (
					<Analytics/>
				) : null}
			</main>
		</>
	)
}
