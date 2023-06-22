/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'apod.nasa.gov',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
