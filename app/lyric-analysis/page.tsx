import Link from "next/link";
import { Reenie_Beanie } from "next/font/google";
import { getCollection } from "@/lib/content";

const handwritten = Reenie_Beanie({ subsets: ["latin"], weight: ["400"] });

const artistBySlug: Record<string, string> = {
  "when-the-chorus-returns": "Taylor Swift",
  "the-second-verse-secret": "Phoebe Bridgers"
};

export default function Page() {
  const posts = getCollection("lyrics");

  return (
    <section className="lyric-page relative overflow-hidden px-6 py-16">
      <div className="lyric-overlay" />
      <img src="/lyric-page-flower-motif.png" alt="decorative flower motif" className="absolute right-6 top-8 z-10 w-44 rotate-[8deg] opacity-70 drop-shadow-[0_10px_20px_rgba(30,20,17,0.45)] md:w-60" />

      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center text-center">
        <h1 className="font-serif text-5xl tracking-[0.08em] text-[#efe4cf] md:text-6xl">Lyric Analysis</h1>

        <div
          className="lyric-intro-card relative mt-8 h-[330px] w-[460px] max-w-full"
          style={{
            backgroundImage: 'url("/lyric-page-intro.png?v=2")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <p className={`${handwritten.className} absolute left-[15%] top-[35%] w-[70%] text-[2rem] leading-[1.23] tracking-[0.035em] text-[#3A261C]`}>
            Notes on songs, repetition, metaphor, and the strange precision of lyrics.
          </p>
        </div>

        <div className="mt-12 grid w-full max-w-5xl gap-8 md:grid-cols-2">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/lyric-analysis/${post.slug}`} className={`relative mx-auto block w-full max-w-md p-4 drop-shadow-[0_16px_26px_rgba(13,8,7,0.42)] ${i % 2 ? "rotate-[1.6deg] mt-3" : "-rotate-[1.4deg]"}`}>
              <img src="/lyric-page-icon.png?v=2" alt="lyric polaroid frame" className="w-full" />
              <p className={`${handwritten.className} absolute bottom-[14%] left-1/2 w-[80%] -translate-x-1/2 text-center text-[1.7rem] leading-[1.15] tracking-[0.03em] text-[#3A261C]`}>
                {post.title} — {artistBySlug[post.slug] ?? "Unknown Artist"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
