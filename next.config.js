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
