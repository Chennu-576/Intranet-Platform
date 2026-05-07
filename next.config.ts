import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ✅ FIXED: Removed the unsupported 'eslint' key
  // The warning was happening because 'eslint' is not a valid Next.js config option.
  // If you need to customize ESLint, do it in .eslintrc.json or package.json.

  images: {
    // ✅ UPDATED: 'domains' is deprecated, 'remotePatterns' is the modern standard
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // ✅ Note: If you still need to disable ESLint during build, it's now done via CLI:
  // Run: next build --no-lint
  // Or in package.json: "build": "next build --no-lint"
}

export default nextConfig