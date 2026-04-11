/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
    ],
  },
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  // GitHub Pages configuration - Update 'portfolio_2' to your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio_2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio_2/' : '',
  trailingSlash: true,
  output: 'export',
}

export default nextConfig
