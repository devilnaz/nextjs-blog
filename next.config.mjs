const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: isProd ? "/your-github-repo-name/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
