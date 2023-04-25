/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "https://devilnaz.github.io/nextjs-blog/",
  },
  assetPrefix: "/nextjs-blog/",
};

export default nextConfig;
