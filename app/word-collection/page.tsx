import Link from "next/link";
import { getCollection } from "@/lib/content";

const starPositions = [
  "left-[8%] top-[10%] rotate-12 text-[48px]",
  "right-[10%] top-[18%] -rotate-6 text-[74px]",
  "left-[12%] bottom-[20%] rotate-[18deg] text-[62px]",
  "right-[16%] bottom-[10%] -rotate-[15deg] text-[55px]",
  "left-[42%] top-[8%] rotate-[6deg] text-[34px]"
];

const photoPool = [
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1455885666463-9f41d06e4b22?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80"
];

export default function Page() {
  const words = getCollection("words");

  return (
    <div className="scroll-smooth">
      {words.map((word, index) => {
        const prev = words[index - 1];
        const next = words[index + 1];
        return (
          <section key={word.slug} id={word.slug} className="word-sheet-bg relative isolate min-h-[100svh] overflow-hidden px-6 py-20">
            {starPositions.map((position, starIndex) => (
              <span key={starIndex} className={`pointer-events-none absolute select-none text-[#8e4f48]/75 ${position}`}>★</span>
            ))}

            <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <article className="paper-grain relative mt-6 rounded-sm border border-[#ad9783]/45 bg-[#f8f1e6]/95 p-8 shadow-paper md:ml-6 md:mt-16">
                <div className="absolute -left-3 top-6 h-8 w-16 -rotate-6 bg-[#d4bea1]/65" />
                <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#6e5040]">{word.tag}</p>
                <h1 className="mb-4 font-serif text-6xl text-[#3a2618] md:text-7xl">{word.title}</h1>
                <p className="mb-8 max-w-xl text-lg leading-8 text-ink/85">{word.definition}</p>
                <div className="space-y-4 border-t border-[#ccb79f]/70 pt-5 text-[1rem] leading-8 text-ink/90">
                  <p><span className="font-semibold">Etymology:</span> {word.etymology}</p>
                  <p>{word.content}</p>
                </div>
              </article>

              <aside className="relative md:mr-4">
                <div className="vintage-photo-frame ml-auto mt-3 w-[88%] rotate-[-2deg] md:mt-20">
                  <img src={photoPool[index % photoPool.length]} alt="vintage collage placeholder" className="h-[360px] w-full object-cover grayscale" />
                </div>
                <div className="absolute -left-2 top-1 h-8 w-24 rotate-6 bg-[#d8c2a7]/70" />
                <p className="mt-5 max-w-sm rotate-[-1deg] border border-[#c9b59e]/65 bg-[#f6ece0] px-4 py-3 text-sm leading-6 text-ink/80 shadow-paper">
                  Personal note: language keeps traces the way paper keeps folds.
                </p>
              </aside>
            </div>

            <nav className="mx-auto mt-14 flex max-w-6xl items-center justify-between gap-4 border-t border-[#bca68f]/50 pt-6 text-sm uppercase tracking-[0.18em] text-[#654737]">
              {prev ? <a href={`#${prev.slug}`} className="hover:text-burgundy">← Previous</a> : <span className="opacity-40">← Previous</span>}
              <Link href={`/words/${word.slug}`} className="hover:text-burgundy">Open full entry</Link>
              {next ? <a href={`#${next.slug}`} className="hover:text-burgundy">Next →</a> : <span className="opacity-40">Next →</span>}
            </nav>
          </section>
        );
      })}
    </div>
  );
}
