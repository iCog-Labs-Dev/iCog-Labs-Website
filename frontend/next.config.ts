import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.istockphoto.com'], // Add the required domain here
  },
};

export default nextConfig;
