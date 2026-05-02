import Link from "next/link";

const links = [
  ["Essays", "/essays"],
  ["Lyric Analysis", "/lyric-analysis"],
  ["Word Collection", "/word-collection"],
  ["Etymology", "/etymology"],
  ["Book Notes", "/book-notes"],
  ["About", "/about"]
];

export function Header() {
  return (
    <header className="border-b border-ink/20 bg-paper/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="font-serif text-2xl tracking-wide">Between Words</Link>
        <div className="flex flex-wrap gap-4 text-sm">
          {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-burgundy">{label}</Link>)}
        </div>
      </nav>
    </header>
  );
}
