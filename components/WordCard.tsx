import Link from "next/link";
import { ContentItem } from "@/lib/content";

export function WordCard({ word, index = 0 }: { word: ContentItem; index?: number }) {
  const rotation = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "-rotate-1"][index % 5];
  return (
    <Link href={`/words/${word.slug}`} className={`paper-grain relative block rounded-sm border border-[#d6c8b6] bg-[#f7f1e7] p-5 shadow-paper transition hover:-translate-y-1 ${rotation}`}>
      <p className="relative z-10 mb-1 text-xs uppercase tracking-[0.2em] text-burgundy">{word.tag}</p>
      <h3 className="relative z-10 mb-2 font-serif text-3xl">{word.title}</h3>
      <p className="relative z-10 text-sm text-ink/80">{word.definition}</p>
    </Link>
  );
}
