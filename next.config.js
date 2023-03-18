/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: "public",
	sw: "service-worker.js",
	disable: process.env.NODE_ENV === "development",
	runtimeCaching: [
		{
			urlPattern: /^https?.*/,
			handler: "NetworkFirst",
		}
	]
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["cdn.sanity.io"],
	},
}

module.exports = withPWA(nextConfig)
