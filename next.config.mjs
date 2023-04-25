const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: isProd ? "/nextjs-blog/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
