/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SPACE_ID: "ro0789tt2xp9",
    CONTENTFUL_ACCESS_KEY: "cLeKQSjThtm0osKpvgEou1Nb-uNO18YWTTd6R-cUSZI"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
