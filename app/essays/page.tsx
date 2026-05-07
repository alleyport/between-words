import { PostCard } from "@/components/PostCard";
import { getCollection } from "@/lib/content";
export default function Page(){const essays=getCollection("essays");return <section className="mx-auto max-w-3xl px-6 py-12"><h1 className="mb-8 font-serif text-5xl">Essays</h1><div className="space-y-4">{essays.map(e=><PostCard key={e.slug} post={e} hrefPrefix="/essays" />)}</div></section>;}
