/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    USER_KEY: process.env.SERVER,
    PASS_KEY: process.env.PASS_KEY,
    NEXT_PUBLIC_SITEMAP_URL: process.env.NEXT_PUBLIC_SITEMAP_URL,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4|webm|mov|ogg|swf|ogv)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'video',
          },
        },
      ],
    })
    return config
  },
}

module.exports = nextConfig
