import Link from "next/link";
import { ContentItem } from "@/lib/content";

export function PostCard({ post, hrefPrefix }: { post: ContentItem; hrefPrefix: string }) {
  return (
    <Link href={`${hrefPrefix}/${post.slug}`} className="block rounded-lg border border-ink/20 bg-white/60 p-5 transition hover:-translate-y-1 hover:shadow-paper">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-moss">{post.date}</p>
      <h3 className="mb-2 font-serif text-2xl">{post.title}</h3>
      <p className="text-sm text-ink/80">{post.excerpt}</p>
    </Link>
  );
}
