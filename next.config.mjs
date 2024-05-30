/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "cloudflare-ipfs.com"],
  },
};

export default nextConfig;
