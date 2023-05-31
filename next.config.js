/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_USER: process.env.SERVER,
    NEXT_PUBLIC_PASS: process.env.NEXT_PUBLIC_PASS,
    NEXT_PUBLIC_SITEMAP_URL: process.env.NEXT_PUBLIC_SITEMAP_URL,
  },
  module: {
    rules: [
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'video',
            },
          },
        ],
      },
    ],
  },
}

module.exports = nextConfig
