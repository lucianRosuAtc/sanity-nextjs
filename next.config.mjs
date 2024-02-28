/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "https://unsplash.com/s/photos/free",
      }
    ],
  },
};

export default nextConfig;

// 3) Add remotePatterns to your next.config.js file