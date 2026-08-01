/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) config.cache = false
    return config
  },
  async rewrites() {
    return [
      {
        source: '/campaign',
        destination: '/campaign/index.html',
      },
    ]
  },
}
module.exports = nextConfig
