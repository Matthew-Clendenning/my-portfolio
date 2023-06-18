/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'https://matt-dev.vercel.app/',
            }
        ],
    },
}

module.exports = nextConfig
