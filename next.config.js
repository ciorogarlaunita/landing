/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: "public",
	sw: "service-worker.js",
	disable: process.env.NODE_ENV === "development",
	runtimeCaching: [
		{
			handler: "NetworkFirst",
		}
	]
})

const nextConfig = {
	reactStrictMode: true,
}

module.exports = withPWA(nextConfig)
