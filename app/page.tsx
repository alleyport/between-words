import Link from "next/link";
import { getCollection } from "@/lib/content";

export default function HomePage() {
  const essays = getCollection("essays");
  const lyrics = getCollection("lyrics");
  const words = getCollection("words");
  const bookNotes = getCollection("book-notes");

  return (
    <div>
      <section className="postcard-hero min-h-[100svh] px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <article className="postcard-sheet relative mx-auto overflow-visible p-8 md:p-12">
            <img src="/gold-wax-stamps.png" alt="gold wax seal collage" className="token token-wax" />
            <img src="/gold-elements.jpg" alt="gold token" className="token token-gold-1" />
            <img src="/gold-elements.jpg" alt="gold token" className="token token-gold-2" />
            <img src="/burgundy-elements.jpg" alt="burgundy token" className="token token-burg-1" />
            <img src="/burgundy-elements.jpg" alt="burgundy token" className="token token-burg-2" />

            <h1 className="text-center font-serif text-4xl tracking-[0.35em] text-[#3a261c] md:text-6xl">BETWEEN WORDS</h1>
            <p className="mx-auto mt-2 w-fit border-y border-[#6E1F1A]/50 px-6 py-1 text-xs uppercase tracking-[0.3em] text-[#5f6f4e]">Close readings of language, lyrics, and meaning</p>
            <div className="mt-4 text-center text-[#6E1F1A]/70">✶ · ✶ · ✶</div>

            <div className="mt-10 grid gap-8 md:grid-cols-[1.05fr_1px_0.95fr]">
              <div>
                <div className="paper-panel rotate-[-1deg]">
                  <div className="h-[320px] rounded-sm border border-[#A98967]/50 bg-[#D8C7A5]/55" />
                </div>
              </div>
              <div className="hidden bg-[#a98967]/70 md:block" />
              <div className="md:pt-8">
                <p className="font-script text-5xl text-[#3a261c]">between words</p>
                <p className="mt-4 max-w-md text-[1.05rem] leading-8 text-[#3a261c]">A personal literary archive of close reading, word histories, lyric interpretation, and marginal reflections.</p>
                <div className="mt-6 space-y-2 text-sm uppercase tracking-[0.2em] text-[#5f6f4e]">
                  <Link href="/about" className="block hover:text-[#6e1f1a]">About this notebook</Link>
                  <Link href={`/essays/${essays[0].slug}`} className="block hover:text-[#6e1f1a]">Read featured essay</Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        <article className="paper-panel tilt-a"><p className="section-kicker">Featured Essay</p><h2 className="section-title">{essays[0].title}</h2><p>{essays[0].excerpt}</p><Link href={`/essays/${essays[0].slug}`} className="paper-link">Read essay</Link></article>
        <article className="paper-panel tilt-b"><p className="section-kicker">Lyric Analysis</p><h2 className="section-title">{lyrics[0].title}</h2><p>{lyrics[0].excerpt}</p><Link href={`/lyric-analysis/${lyrics[0].slug}`} className="paper-link">Explore reading</Link></article>
        <article className="paper-panel"><p className="section-kicker">Word Collection</p><h2 className="section-title">A notebook of words</h2><p>{words.slice(0,3).map((w) => w.title).join(" · ")}</p><Link href="/word-collection" className="paper-link">Browse word sheets</Link></article>
        <article className="paper-panel tilt-a"><p className="section-kicker">Book Notes</p><h2 className="section-title">{bookNotes[0].title}</h2><p>{bookNotes[0].excerpt}</p><Link href={`/book-notes/${bookNotes[0].slug}`} className="paper-link">Open note</Link></article>
      </section>
    </div>
  );
}
