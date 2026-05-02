import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { WordCard } from "@/components/WordCard";
import { getCollection } from "@/lib/content";

const collageImages = [
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1455885666463-9f41d06e4b22?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=900&q=80"
];

export default function HomePage() {
  const essays = getCollection("essays");
  const lyrics = getCollection("lyrics");
  const words = getCollection("words");

  return (
    <div className="mx-auto max-w-6xl space-y-20 px-6 py-10">
      <section className="paper-grain relative overflow-hidden rounded-2xl border border-[#a78f75]/30 bg-[#e9dcc9] p-10 shadow-paper md:p-14">
        <div className="absolute -left-3 top-10 h-24 w-14 rotate-6 bg-[#d9c8af] opacity-70" />
        <div className="absolute right-8 top-8 h-40 w-32 -rotate-3 overflow-hidden rounded-sm border border-[#7e6752]/20 shadow-paper">
          <img src={collageImages[0]} alt="books and pages" className="h-full w-full object-cover" />
        </div>
        <div className="absolute bottom-10 right-36 h-24 w-28 rotate-6 overflow-hidden rounded-sm border border-[#7e6752]/20 shadow-paper">
          <img src={collageImages[1]} alt="handwritten notes" className="h-full w-full object-cover" />
        </div>
        <p className="relative z-10 mb-3 text-xs uppercase tracking-[0.28em] text-[#6e5140]">Private notebook made public</p>
        <h1 className="font-script relative z-10 mb-3 text-6xl leading-tight text-[#432719] md:text-8xl">Between Words</h1>
        <p className="relative z-10 max-w-2xl text-lg md:text-xl">Close readings of language, lyrics, and meaning.</p>
      </section>

      <section className="grid items-start gap-8 md:grid-cols-[1.15fr_0.85fr]">
        <article className="paper-grain relative rounded-xl border border-[#8f7a64]/35 bg-[#f8efe2] p-8 shadow-paper">
          <div className="absolute -top-3 right-10 rotate-3 bg-[#d6bea2] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#5b4332]">Featured Essay</div>
          <h2 className="mb-3 font-serif text-4xl text-[#3d2b1f]">{essays[0].title}</h2>
          <p className="mb-5 leading-7 text-ink/85">{essays[0].excerpt}</p>
          <Link href={`/essays/${essays[0].slug}`} className="text-burgundy underline">Read essay</Link>
        </article>
        <div className="relative min-h-[330px]">
          <div className="absolute right-10 top-3 h-52 w-72 -rotate-2 overflow-hidden border-4 border-[#f5ecdf] shadow-paper">
            <img src={collageImages[2]} alt="open notebook" className="h-full w-full object-cover" />
          </div>
          <div className="absolute left-0 top-36 h-36 w-56 rotate-2 border border-[#9a856e]/40 bg-[#efe1cf] p-4 shadow-paper">
            <p className="font-serif text-xl text-[#4e3728]">★</p>
            <p className="mt-2 text-sm text-ink/75">A page can be both archive and experiment.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-2xl border border-[#917b66]/35 bg-[#d4c0a8]/70 p-8 shadow-paper md:p-10">
        <div className="absolute inset-0 opacity-35" style={{backgroundImage:`url(${collageImages[1]})`, backgroundSize:"cover", backgroundPosition:"center"}} />
        <div className="relative z-10 max-w-2xl rounded bg-[#f6eee2]/92 p-6 shadow-paper">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-moss">Lyric Analysis</p>
          <h2 className="font-serif text-3xl text-[#3d291b]">{lyrics[0].title}</h2>
          <p className="mt-3 leading-7">{lyrics[0].excerpt}</p>
          <p className="mt-5 inline-block -rotate-1 border border-[#bfa98f] bg-[#f3e6d6] px-4 py-2 font-serif text-xl">“Every refrain returns with a different wound.”</p>
          <Link href={`/lyric-analysis/${lyrics[0].slug}`} className="mt-5 block text-burgundy underline">Explore reading</Link>
        </div>
      </section>

      <section className="relative rounded-xl border border-[#9d876f]/35 bg-[#f2e8da] p-8 shadow-paper">
        <h2 className="mb-5 font-serif text-4xl">Word Collection</h2>
        <Link href="/word-collection" className="mb-6 inline-block text-sm text-burgundy underline">View full archive</Link>
        <div className="grid gap-5 md:grid-cols-3">
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
