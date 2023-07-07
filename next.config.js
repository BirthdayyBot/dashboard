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
				hostname: 'discord.com',
				port: '',
				pathname: '?'
			}
		]
	}
};

module.exports = nextConfig;
