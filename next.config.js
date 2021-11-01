/** @type {import('next').NextConfig} */
module.exports = {
  experimental: { outputFileTracing: true },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: `/`,
        destination: `/api/today`,
        permanent: false,
      },
    ]
  },
}
