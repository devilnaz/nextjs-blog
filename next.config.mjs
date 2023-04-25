/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "/nextjs-blog/",
};

export default nextConfig;
