"use client";

import { usePathname } from "next/navigation";

export function StarField() {
  const pathname = usePathname();
  if (pathname === "/" || pathname.startsWith("/lyric-analysis")) return null;

  const stars = [
    "left-[5%] top-[8%] text-[20px] rotate-12",
    "left-[18%] top-[28%] text-[26px] -rotate-6",
    "left-[8%] top-[62%] text-[18px] rotate-[18deg]",
    "left-[42%] top-[14%] text-[24px] -rotate-[14deg]",
    "left-[56%] top-[36%] text-[30px] rotate-[8deg]",
    "left-[72%] top-[18%] text-[22px] -rotate-12",
    "left-[84%] top-[42%] text-[28px] rotate-[16deg]",
    "left-[68%] top-[74%] text-[20px] -rotate-[9deg]",
    "left-[36%] top-[78%] text-[26px] rotate-[11deg]",
    "left-[90%] top-[86%] text-[18px] rotate-[4deg]",
    "left-[22%] top-[90%] text-[24px] -rotate-[15deg]"
  ];

  return <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.16]" aria-hidden="true">{stars.map((star, i) => <span key={i} className={`absolute select-none text-[#6E1F1A] ${star}`}>★</span>)}</div>;
}
