import { notFound } from "next/navigation";
import { getBySlug } from "@/lib/content";
export default function Page({ params }: { params: { slug: string } }) { const post = getBySlug("book-notes", params.slug); if (!post) return notFound(); return <article className="mx-auto max-w-3xl px-6 py-14"><h1 className="mb-3 font-serif text-5xl">{post.title}</h1><div className="mt-8 whitespace-pre-line leading-8">{post.content}</div></article>; }
