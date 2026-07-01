/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Turbopack is the default bundler in Next.js 16 for both dev and build.
  // Turbopack-specific options (previously experimental.turbopack) now live here.
  turbopack: {},
}

export default nextConfig
