import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { WordCard } from "@/components/WordCard";
import { getCollection } from "@/lib/content";

export default function HomePage() {
  const essays = getCollection("essays");
  const lyrics = getCollection("lyrics");
  const words = getCollection("words");

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-10">
      <section className="paper-grain relative overflow-hidden rounded-xl border border-ink/20 bg-[#efe4d4] p-12 shadow-paper">
        <div className="absolute right-6 top-8 h-24 w-24 -rotate-6 rounded bg-burgundy/20" />
        <h1 className="relative z-10 mb-4 font-serif text-6xl">Between Words</h1>
        <p className="relative z-10 max-w-2xl text-xl">Close readings of language, lyrics, and meaning.</p>
      </section>

      <section className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <article className="rounded-xl border border-ink/20 bg-[#f9f3e9] p-8 shadow-paper">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-moss">Featured Essay</p>
          <h2 className="mb-3 font-serif text-4xl">{essays[0].title}</h2>
          <p className="mb-5">{essays[0].excerpt}</p>
          <Link href={`/essays/${essays[0].slug}`} className="text-burgundy underline">Read essay</Link>
        </article>
        <div className="relative min-h-56">
          <div className="absolute left-8 top-6 h-40 w-48 -rotate-3 border border-ink/20 bg-beige/60" />
          <div className="absolute left-0 top-0 h-40 w-48 rotate-2 border border-ink/20 bg-moss/30" />
        </div>
      </section>

      <section className="grid gap-6 rounded-xl border border-ink/20 bg-[#f2e7da] p-8 md:grid-cols-2">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-moss">Lyric Analysis</p>
          <h2 className="font-serif text-3xl">{lyrics[0].title}</h2>
          <p className="mt-3">{lyrics[0].excerpt}</p>
          <Link href={`/lyric-analysis/${lyrics[0].slug}`} className="mt-4 inline-block text-burgundy underline">Explore reading</Link>
        </div>
        <blockquote className="self-end border-l-2 border-burgundy pl-4 font-serif text-2xl text-ink/80">"Every line break hides a decision about breath."</blockquote>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-serif text-4xl">Word Collection</h2>
          <Link href="/word-collection" className="text-sm text-burgundy underline">View full archive</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {words.slice(0, 3).map((word, index) => <WordCard key={word.slug} word={word} index={index} />)}
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-4xl">Recent Essays</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {essays.map((essay) => <PostCard key={essay.slug} post={essay} hrefPrefix="/essays" />)}
        </div>
      </section>
    </div>
  );
}
