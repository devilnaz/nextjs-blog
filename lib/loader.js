import { useRouter } from "next/router";
export default function myImageLoader({ src, width, quality }) {
  return `https://devilnaz.github.io/nextjs-blog${src}?w=${width}&q=${quality || 75}`;
}
