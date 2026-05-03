import Link from "next/link";
import { Reenie_Beanie } from "next/font/google";
import { getCollection } from "@/lib/content";

const handwritten = Reenie_Beanie({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
  const posts = getCollection("lyrics");
  return (
    <section className="lyric-page relative overflow-hidden px-6 py-16">
      <div className="lyric-overlay" />
      <img src="/lyric-page-flower-motif.png" alt="decorative flower motif" className="absolute right-6 top-8 z-10 w-44 rotate-[8deg] opacity-70 drop-shadow-[0_10px_20px_rgba(30,20,17,0.45)] md:w-60" />

      <div className="relative z-20 mx-auto max-w-6xl text-center">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#d8c7a5]">Between Words</p>
        <h1 className="font-serif text-5xl tracking-[0.08em] text-[#efe4cf] md:text-6xl">Lyric Analysis</h1>

        <div className="relative mx-auto mt-8 w-full max-w-xl">
          <img src="/lyric-page-intro.png" alt="clipboard intro" className="mx-auto w-full rotate-[-1deg] drop-shadow-[0_14px_22px_rgba(0,0,0,0.35)]" />
          <p className={`${handwritten.className} absolute left-[16%] top-[31%] w-[70%] text-[1.9rem] leading-[1.22] tracking-[0.035em] text-[#3A261C]`}>
            Notes on songs, repetition, metaphor, and the strange precision of lyrics.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/lyric-analysis/${post.slug}`} className={`lyric-polaroid mx-auto block w-full max-w-md p-4 ${i % 2 ? "rotate-[1.6deg] mt-3" : "-rotate-[1.4deg]"}`}>
              <img src="/lyric-page-icon.png" alt="lyric polaroid frame" className="w-full" />
              <div className={`${handwritten.className} lyric-polaroid-text`}>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
