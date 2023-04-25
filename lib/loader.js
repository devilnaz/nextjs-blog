export default function myImageLoader({ src, width, quality }) {
  const currentUrl = window.location.href;
  const isGithub = currentUrl.includes("devilnaz.github.io/nextjs-blog");

  return `${isGithub ? "https://devilnaz.github.io/nextjs-blog" : ""}${src}?w=${width}&q=${quality || 75}`;
}
