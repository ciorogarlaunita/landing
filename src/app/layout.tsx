import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
	title: "Ciorogârla Unită",
	applicationName: "Ciorogârla Unită",
	manifest: "/site.webmanifest",
	appleWebApp: true,
	viewport: "width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover",
	colorScheme: "light",
	themeColor: "#ffffff",
	icons: [
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/apple-touch-icon.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
	],
	other: {
		"apple-mobile-web-app-status-bar-style": "black-translucent",
		"apple-mobile-web-app-capable": "yes",
	},
};

const poppinsFont = Poppins({
	weight: ["400", "700"],
	variable: "--font-poppins",
	subsets: ["latin-ext"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,200"/>
			</head>
			<body className={`${poppinsFont.variable} font-sans`}>
				<main>
					{children}
				</main>
			</body>
		</html>
	);
}
