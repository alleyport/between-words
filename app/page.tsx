import Link from "next/link";
import { MonteCarlo, Reenie_Beanie } from "next/font/google";

const titleFont = MonteCarlo({ subsets: ["latin"], weight: ["400"] });
const handwrittenFont = Reenie_Beanie({ subsets: ["latin"], weight: ["400"] });

const bottomStars = [
  "left-[-24px] bottom-[-24px] w-[220px] rotate-[-5deg] opacity-90 sm:w-[280px] lg:w-[330px]",
  "left-[18%] bottom-[-12px] w-[170px] rotate-[7deg] opacity-80 sm:w-[210px] lg:w-[250px]",
  "left-1/2 bottom-[-30px] w-[240px] -translate-x-1/2 rotate-[-2deg] opacity-90 sm:w-[300px] lg:w-[360px]",
  "right-[18%] bottom-[-10px] w-[175px] rotate-[-7deg] opacity-80 sm:w-[220px] lg:w-[260px]",
  "right-[-28px] bottom-[-22px] w-[220px] rotate-[6deg] opacity-90 sm:w-[285px] lg:w-[340px]"
];

export default function HomePage() {
  return (
    <section
      className="home-landing relative h-[100svh] min-h-[100svh] overflow-hidden bg-[#efe4cf] bg-cover bg-center bg-no-repeat text-[#3A261C]"
      style={{ backgroundImage: "url('/images/home/home-page-bg.jpg')" }}
    >
      <img src="/images/home/decorative-star-1.png" alt="" className="absolute left-[8%] top-[13%] w-[clamp(42px,5vw,76px)] rotate-[-10deg] opacity-70 drop-shadow-[0_10px_16px_rgba(58,38,28,0.16)]" />
      <img src="/images/home/decorative-star-2.png" alt="" className="absolute right-[10%] top-[15%] w-[clamp(46px,5.4vw,84px)] rotate-[9deg] opacity-68 drop-shadow-[0_10px_16px_rgba(58,38,28,0.16)]" />
      <img src="/images/home/decorative-wax-stamp.png" alt="" className="absolute right-[27%] top-[51%] z-20 w-[clamp(54px,5.4vw,88px)] rotate-[-7deg] opacity-78 drop-shadow-[0_13px_18px_rgba(58,38,28,0.26)]" />

      <div className="relative z-10 h-full px-6 text-center">
        <h1 className={`${titleFont.className} absolute left-1/2 top-[6.5svh] -translate-x-1/2 whitespace-nowrap text-[clamp(4.5rem,8vw,8rem)] leading-none tracking-[0.012em] text-[#3A261C] drop-shadow-[0_4px_8px_rgba(239,228,207,0.35)]`}>
          between words
        </h1>

        <div className="absolute left-1/2 top-[43svh] aspect-[1.45/1] w-[clamp(360px,32vw,560px)] -translate-x-1/2 -translate-y-1/2 bg-[url('/images/home/center-art-rectangle.png')] bg-contain bg-center bg-no-repeat drop-shadow-[0_20px_32px_rgba(58,38,28,0.24)]">
          <p className={`${handwrittenFont.className} absolute left-[17%] top-[31%] w-[66%] text-[clamp(1.8rem,2.2vw,2.65rem)] leading-[1.1] tracking-[0.035em] text-[#3A261C]`}>
            close readings of language, lyrics, and meaning
          </p>
        </div>

        <nav className="absolute left-1/2 top-[66svh] flex -translate-x-1/2 flex-wrap justify-center gap-x-7 gap-y-2 whitespace-nowrap text-xs uppercase tracking-[0.22em] text-[#1F2A17] sm:text-sm">
          <Link href="/essays" className="hover:text-[#6E1F1A]">Essays</Link>
          <Link href="/lyric-analysis" className="hover:text-[#6E1F1A]">Lyrics</Link>
          <Link href="/word-collection" className="hover:text-[#6E1F1A]">Words</Link>
          <Link href="/book-notes" className="hover:text-[#6E1F1A]">Book Notes</Link>
        </nav>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[170px] overflow-visible sm:h-[210px] lg:h-[250px]" aria-hidden="true">
        {bottomStars.map((position, index) => (
          <img key={index} src="/images/home/bottom-stars.png" alt="" className={`absolute ${position}`} />
        ))}
      </div>
    </section>
  );
}
