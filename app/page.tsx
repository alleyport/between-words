import Link from "next/link";
import { MonteCarlo, Reenie_Beanie } from "next/font/google";

const titleFont = MonteCarlo({ subsets: ["latin"], weight: ["400"] });
const handwrittenFont = Reenie_Beanie({ subsets: ["latin"], weight: ["400"] });

const bottomStars = [
  "left-[-6%] bottom-[-7%] w-[34vw] max-w-[420px] rotate-[-9deg] opacity-95",
  "left-[18%] bottom-[-9%] w-[20vw] max-w-[245px] rotate-[7deg] opacity-85",
  "left-1/2 bottom-[-10%] w-[28vw] max-w-[340px] -translate-x-1/2 rotate-[-2deg] opacity-95",
  "right-[19%] bottom-[-8%] w-[18vw] max-w-[230px] rotate-[-12deg] opacity-80",
  "right-[-5%] bottom-[-7%] w-[33vw] max-w-[410px] rotate-[10deg] opacity-95"
];

export default function HomePage() {
  return (
    <section className="home-landing relative h-[100svh] overflow-hidden bg-[#efe4cf] text-[#3A261C]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(216,199,165,0.95),rgba(239,228,207,0.82)_42%,rgba(169,137,103,0.36)_100%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(58,38,28,0.65)_0.55px,transparent_0.55px)] [background-size:4px_4px]" />

      <img src="/images/home/decorative-star-1.png" alt="" className="absolute left-[9%] top-[14%] w-14 rotate-[-13deg] opacity-80 drop-shadow-[0_10px_16px_rgba(58,38,28,0.18)] sm:w-20" />
      <img src="/images/home/decorative-star-2.png" alt="" className="absolute right-[12%] top-[18%] w-16 rotate-[11deg] opacity-75 drop-shadow-[0_10px_16px_rgba(58,38,28,0.18)] sm:w-24" />
      <img src="/images/home/decorative-wax-stamp.png" alt="" className="absolute right-[18%] top-[58%] z-20 w-16 rotate-[-8deg] opacity-85 drop-shadow-[0_13px_18px_rgba(58,38,28,0.28)] sm:w-24" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center px-6 pt-[7svh] text-center">
        <h1 className={`${titleFont.className} text-[4.8rem] leading-none tracking-[0.015em] text-[#3A261C] drop-shadow-[0_4px_8px_rgba(239,228,207,0.3)] sm:text-[7rem] md:text-[8.8rem]`}>
          between words
        </h1>

        <div className="relative mt-[-0.5rem] aspect-[1.45/1] w-[min(78vw,520px)] bg-[url('/images/home/center-art-rectangle.png')] bg-contain bg-center bg-no-repeat drop-shadow-[0_20px_32px_rgba(58,38,28,0.24)] sm:mt-[-1rem]">
          <p className={`${handwrittenFont.className} absolute left-[18%] top-[29%] w-[64%] text-[1.8rem] leading-[1.12] tracking-[0.035em] text-[#3A261C] sm:text-[2.25rem] md:text-[2.55rem]`}>
            close readings of language, lyrics, and meaning
          </p>
        </div>

        <nav className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.22em] text-[#1F2A17] sm:mt-4">
          <Link href="/essays" className="hover:text-[#6E1F1A]">Essays</Link>
          <Link href="/lyric-analysis" className="hover:text-[#6E1F1A]">Lyrics</Link>
          <Link href="/word-collection" className="hover:text-[#6E1F1A]">Words</Link>
          <Link href="/book-notes" className="hover:text-[#6E1F1A]">Book Notes</Link>
        </nav>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[30svh] overflow-visible" aria-hidden="true">
        {bottomStars.map((position, index) => (
          <img key={index} src="/images/home/bottom-stars.png" alt="" className={`absolute ${position}`} />
        ))}
      </div>
    </section>
  );
}
