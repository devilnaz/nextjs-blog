import { useRouter } from "next/router";
export default function myImageLoader({ src, width, quality }: { src: string; width: string; quality: string }) {
  return `https://devilnaz.github.io/nextjs-blog${src}?w=${width}&q=${quality || 75}`;
}
