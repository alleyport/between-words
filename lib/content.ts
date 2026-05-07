import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentItem = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  tag?: string;
  definition?: string;
  etymology?: string;
  content: string;
};

export function getCollection(folder: string): ContentItem[] {
  const dir = path.join(process.cwd(), "content", folder);
  const files = fs.readdirSync(dir);
  return files.map((file) => {
    const source = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(source);
    return {
      slug: file.replace(/\.mdx?$/, ""),
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      tag: data.tag,
      definition: data.definition,
      etymology: data.etymology,
      content
    } as ContentItem;
  }).sort((a, b) => (a.date && b.date ? +new Date(b.date) - +new Date(a.date) : 0));
}

export function getBySlug(folder: string, slug: string): ContentItem | undefined {
  return getCollection(folder).find((entry) => entry.slug === slug);
}
