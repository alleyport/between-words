import { notFound } from "next/navigation";
import { getBySlug } from "@/lib/content";

export default function WordPage({ params }: { params: { slug: string } }) {
  const word = getBySlug("words", params.slug);
  if (!word) return notFound();
  return (
    <article className="reading-page">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-moss">{word.tag}</p>
      <h1 className="mb-4 font-serif text-6xl">{word.title}</h1>
      <p className="mb-8 text-xl italic text-ink/80">{word.definition}</p>
      <div className="space-y-6 leading-8">
        <section><h2 className="font-serif text-2xl">Etymology</h2><p>{word.etymology}</p></section>
        <section><h2 className="font-serif text-2xl">History</h2><p>{word.content}</p></section>
      </div>
    </article>
  );
}
