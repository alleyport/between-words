import { PostCard } from "@/components/PostCard";
import { getCollection } from "@/lib/content";
export default function Page(){const posts=getCollection("lyrics");return <section className="mx-auto max-w-4xl px-6 py-12"><h1 className="mb-4 font-serif text-5xl">Lyric Analysis</h1><p className="mb-8 text-ink/70">Space is prepared for future Spotify embeds and playlists.</p><div className="grid gap-4 md:grid-cols-2">{posts.map(e=><PostCard key={e.slug} post={e} hrefPrefix="/lyric-analysis" />)}</div></section>;}
