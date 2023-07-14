/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	devIndicators: {
		buildActivityPosition: 'bottom-right'
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'discord.com'
			},
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com'
			},
			{
				protocol: 'https',
				hostname: 'media.discordapp.net'
			},
			{
				protocol: 'https',
				hostname: 'bulma.io'
			},
			{
				protocol: 'https',
				hostname: 'files.schunk.dev'
			}
		]
	}
};

module.exports = nextConfig;
