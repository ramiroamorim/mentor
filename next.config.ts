import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "assets.aceternity.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "i.postimg.cc" },
    ],
  },
 
  typescript: {
    // Ignora erros TypeScript durante o build  
    ignoreBuildErrors: true,
  },
};

export default nextConfig;