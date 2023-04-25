import { useRouter } from "next/router";
export default function myImageLoader({ src, width, quality }) {
  const router = useRouter();
  const isGithub = router.pathname.includes("nextjs-blog");

  return `${isGithub ? "https://devilnaz.github.io/nextjs-blog" : ""}${src}?w=${width}&q=${quality || 75}`;
}
