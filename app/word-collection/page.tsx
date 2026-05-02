import { WordCard } from "@/components/WordCard";
import { getCollection } from "@/lib/content";
export default function Page(){const words=getCollection("words");return <section className="mx-auto max-w-5xl px-6 py-12"><h1 className="mb-8 font-serif text-5xl">Word Collection</h1><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{words.map((w,i)=><WordCard key={w.slug} word={w} index={i} />)}</div></section>;}
