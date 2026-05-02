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
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#efe4cf]/80">
            <span>Between Words Archive</span>
            <nav className="flex gap-4">
              <Link href="/essays">Essays</Link><Link href="/lyric-analysis">Lyrics</Link><Link href="/word-collection">Words</Link>
            </nav>
          </div>

          <article className="postcard-sheet relative mx-auto overflow-hidden p-8 md:p-12">
            <div className="absolute right-8 top-8 h-20 w-16 border-2 border-[#a98967] bg-[#d8c7a5]/50 p-1 text-center text-[10px] leading-tight text-[#6e1f1a]">STAMP<br/>50¢</div>
            <div className="absolute left-8 top-6 text-[#6e1f1a]/65">✶ ✶ ✶</div>
            <h1 className="text-center font-serif text-4xl tracking-[0.35em] text-[#3a261c] md:text-6xl">BETWEEN WORDS</h1>
            <p className="mx-auto mt-2 w-fit border-y border-[#a98967]/70 px-6 py-1 text-xs uppercase tracking-[0.3em] text-[#5f6f4e]">Close readings of language, lyrics, and meaning</p>

            <div className="mt-10 grid gap-8 md:grid-cols-[1.05fr_1px_0.95fr]">
              <div>
                <div className="vintage-illustration-frame rotate-[-1.8deg]">
                  <img src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=1400&q=80" alt="vintage bird placeholder" className="h-[320px] w-full object-cover sepia" />
                </div>
              </div>
              <div className="hidden bg-[#a98967]/70 md:block" />
              <div className="md:pt-8">
                <p className="font-script text-5xl text-[#3a261c]">Between Words</p>
                <p className="mt-4 max-w-md text-[1.05rem] leading-8 text-[#3a261c]">A personal literary archive: lyric analysis, etymology, favourite words, and book notes gathered like correspondence across time.</p>
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
        <article className="paper-panel tilt-a">
          <p className="section-kicker">Featured Essay</p>
          <h2 className="section-title">{essays[0].title}</h2>
          <p>{essays[0].excerpt}</p>
          <Link href={`/essays/${essays[0].slug}`} className="paper-link">Read essay</Link>
        </article>
        <article className="paper-panel tilt-b">
          <p className="section-kicker">Lyric Analysis</p>
          <h2 className="section-title">{lyrics[0].title}</h2>
          <p>{lyrics[0].excerpt}</p>
          <Link href={`/lyric-analysis/${lyrics[0].slug}`} className="paper-link">Explore reading</Link>
        </article>
        <article className="paper-panel">
          <p className="section-kicker">Word Collection</p>
          <h2 className="section-title">A notebook of words</h2>
          <p>{words.slice(0,3).map((w) => w.title).join(" · ")}</p>
          <Link href="/word-collection" className="paper-link">Browse word sheets</Link>
        </article>
        <article className="paper-panel tilt-a">
          <p className="section-kicker">Book Notes</p>
          <h2 className="section-title">{bookNotes[0].title}</h2>
          <p>{bookNotes[0].excerpt}</p>
          <Link href={`/book-notes/${bookNotes[0].slug}`} className="paper-link">Open note</Link>
        </article>
      </section>
    </div>
  );
}
