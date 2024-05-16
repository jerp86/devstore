/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: ["/jerp86.png", "/iguana-3d.png"],
      },
    ],
  },
};

export default nextConfig;
