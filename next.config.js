/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/nextjs-blog" : "";

module.exports = {
  /**
   * Tell Next.js where the `public` folder is.
   * Replace `nextjs-github-pages` with your Github repo project name.
   */
  assetPrefix: isProd ? "/nextjs-blog/" : "",
  /**
   * Disable server-based image optimization.
   *
   * @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
   */
  images: {
    loader: "akamai",
    domains: ["https://devilnaz.github.io/nextjs-blog/"],
  },
  basePath: basePath,
};
