/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost:3000",
        port: "",
        pathname: "folderPage/**",
      },
    ],
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
