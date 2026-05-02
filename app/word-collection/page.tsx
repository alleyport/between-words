import Link from "next/link";
import { getCollection } from "@/lib/content";

const starPositions = [
  "left-[9%] top-[12%] rotate-12 text-[45px]",
  "right-[8%] top-[20%] -rotate-6 text-[72px]",
  "left-[12%] bottom-[16%] rotate-[18deg] text-[60px]",
  "right-[15%] bottom-[11%] -rotate-[15deg] text-[52px]",
  "left-[46%] top-[9%] rotate-[6deg] text-[32px]"
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
            <img src="/burgundy-elements.jpg" alt="small burgundy token" className="absolute right-10 top-10 h-10 w-10 rotate-12 rounded-md opacity-70 shadow-md" />
            {starPositions.map((position, starIndex) => (
              <span key={starIndex} className={`pointer-events-none absolute select-none text-[#6E1F1A]/80 ${position}`}>★</span>
            ))}

            <article className="paper-panel mx-auto max-w-4xl md:ml-[8%] md:mr-auto">
              <div className="absolute -left-2 top-5 h-7 w-20 -rotate-6 bg-[#d8c7a5]/80" />
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#5F6F4E]">{word.tag}</p>
              <h1 className="mb-4 font-serif text-6xl text-[#1F2A17] md:text-7xl">{word.title}</h1>
              <p className="mb-8 max-w-3xl text-lg leading-8 text-[#3A261C]">{word.definition}</p>

              <div className="space-y-4 border-t border-[#A98967]/60 pt-5 text-[1rem] leading-8 text-[#3A261C]">
                <p><span className="font-semibold uppercase tracking-[0.16em] text-xs text-[#5F6F4E]">Etymology</span><br />{word.etymology}</p>
                <p><span className="font-semibold uppercase tracking-[0.16em] text-xs text-[#5F6F4E]">History · Reflection · Usage</span><br />{word.content}</p>
              </div>
            </article>

            <nav className="mx-auto mt-10 flex max-w-4xl items-center justify-between gap-4 border-t border-[#A98967]/50 pt-6 text-sm uppercase tracking-[0.18em] text-[#3A261C] md:ml-[8%] md:mr-auto">
              {prev ? <a href={`#${prev.slug}`} className="hover:text-[#6E1F1A]">← Previous</a> : <span className="opacity-40">← Previous</span>}
              <Link href={`/words/${word.slug}`} className="hover:text-[#6E1F1A]">Open full entry</Link>
              {next ? <a href={`#${next.slug}`} className="hover:text-[#6E1F1A]">Next →</a> : <span className="opacity-40">Next →</span>}
            </nav>
          </section>
        );
      })}
    </div>
  );
}
