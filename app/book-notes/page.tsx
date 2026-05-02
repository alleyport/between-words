import { PostCard } from "@/components/PostCard";
import { getCollection } from "@/lib/content";
export default function Page(){const posts=getCollection("book-notes");return <section className="mx-auto max-w-3xl px-6 py-12"><h1 className="mb-8 font-serif text-5xl">Book Notes</h1><div className="space-y-4">{posts.map(e=><PostCard key={e.slug} post={e} hrefPrefix="/book-notes" />)}</div></section>;}
