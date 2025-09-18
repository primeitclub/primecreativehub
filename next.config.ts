import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
  unoptimized: true,
},
  typescript: {
    ignoreBuildErrors: true,
  },
  // images: {
  //   unoptimized: false,
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/coming-soon',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
