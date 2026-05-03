import Link from "next/link";
import { getCollection } from "@/lib/content";

export default function Page() {
  const posts = getCollection("lyrics");
  return (
    <section className="lyric-page relative overflow-hidden px-6 py-14">
      <div className="lyric-overlay" />
      <img src="/lyric-page-flower-motif.png" alt="decorative flower motif" className="absolute right-6 top-8 z-10 w-44 rotate-6 drop-shadow-[0_10px_20px_rgba(30,20,17,0.45)] md:w-60" />

      <div className="relative z-20 mx-auto max-w-6xl">
        <div className="grid items-start gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#d8c7a5]">Between Words</p>
            <h1 className="font-serif text-5xl text-[#efe4cf] md:text-6xl">Lyric Analysis</h1>
          </div>

          <div className="relative max-w-md justify-self-start md:justify-self-end">
            <img src="/lyric-page-intro.png" alt="clipboard intro" className="w-full rotate-[-2deg] drop-shadow-[0_14px_22px_rgba(0,0,0,0.35)]" />
            <p className="absolute left-[16%] top-[31%] w-[70%] font-serif text-[0.92rem] leading-6 text-[#3A261C]">
              Notes on songs, repetition, metaphor, and the way lyrics carry meaning across a voice.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/lyric-analysis/${post.slug}`} className={`lyric-slip block p-6 ${i % 2 ? "rotate-[0.7deg]" : "-rotate-[0.8deg]"}`}>
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#6E1F1A]">{post.date}</p>
              <h3 className="mb-2 font-serif text-3xl text-[#3A261C]">{post.title}</h3>
              <p className="text-[#3A261C]/85">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
