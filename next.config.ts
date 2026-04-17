import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React strict mode for development safety
  reactStrictMode: true,
  // Optimise images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
