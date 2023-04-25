/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: "/nextjs-blog/",
  basePath: "/nextjs-blog",
  images: {
    loader: "akamai",
    path: "",
  },
};

export default nextConfig;
