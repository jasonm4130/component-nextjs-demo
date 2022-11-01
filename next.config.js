/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos", "static.euronews.com", "www.abc.net.au", "live-production.wcms.abc-cdn.net.au"]
  }
}

module.exports = nextConfig
