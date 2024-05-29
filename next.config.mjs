/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com", "cloudflare-ipfs.com"],
  },
};

export default nextConfig;
