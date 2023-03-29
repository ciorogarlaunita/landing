import { Page } from "lume/core.ts";

export default function Layout({ content }: Page) {
	return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
				/>
				<title>Ciorogârla Unită</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<meta
					name="apple-mobile-web-app-title"
					content="Ciorogârla Unită"
				/>
				<meta name="application-name" content="Ciorogârla Unită" />
				<meta
					name="theme-color"
					media="(prefers-color-scheme: light)"
					content="#e4e4e4"
				/>
				<meta
					name="theme-color"
					media="(prefers-color-scheme: dark)"
					content="#212121"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,200"
				/>
				<link rel="stylesheet" href="/styles.css" />
			</head>
			<body className="text-dark bg-light dark:text-light dark:bg-dark">
				<main className="font-sans h-full">
					{content}
				</main>
			</body>
		</html>
	);
}
