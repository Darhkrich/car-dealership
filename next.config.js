// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Add any other domains you might use for car images
      // Example:
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.example.com',
      //   port: '',
      //   pathname: '/cars/**',
      // },
    ],
    // Optional: Set device sizes and image formats for optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
  },
  // Additional recommended configurations for a car dealership site
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
  // If you're using any redirects or rewrites, add them here
  // async redirects() {
  //   return [];
  // },
};

module.exports = nextConfig;