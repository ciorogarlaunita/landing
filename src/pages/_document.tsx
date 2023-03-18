import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#053b21"/>
				<meta name="apple-mobile-web-app-title" content="Ciorogârla Unită"/>
				<meta name="application-name" content="Ciorogârla Unită"/>
				<meta name="theme-color" media="(prefers-color-scheme: light)" content="#e4e4e4"/>
				<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#212121"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<meta name="apple-mobile-web-app-capable" content="yes"/>
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,200&display=optional"/>
			</Head>
			<body className="text-dark bg-light dark:text-light dark:bg-dark">
				<Main />
				<NextScript />
			</body>
		</Html>
   )
}
