import Link from "next/link";

const links = [["Essays","/essays"],["Lyric Analysis","/lyric-analysis"],["Word Collection","/word-collection"],["Etymology","/etymology"],["Book Notes","/book-notes"],["About","/about"]];

export function Header() {
  return (
    <header className="border-b border-[#A98967]/40 bg-[#EFE4CF]/92 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="font-script text-5xl leading-none text-[#3A261C]">between words</Link>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.15em] text-[#1F2A17]">
          {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-[#6E1F1A]">{label}</Link>)}
        </div>
      </nav>
    </header>
  );
}
