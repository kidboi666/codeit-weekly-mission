/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "folderPage/**",
      },
    ],
    domains: ["avatars.githubusercontent.com", "cloudflare-ipfs.com"],
  },
};

export default nextConfig;
