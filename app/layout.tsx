import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Monsieur_La_Doulaise } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StarField } from "@/components/StarField";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const script = Monsieur_La_Doulaise({ subsets: ["latin"], weight: ["400"], variable: "--font-script" });

export const metadata: Metadata = { title: "Between Words", description: "Close readings of language, lyrics, and meaning" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}><body className="font-sans"><StarField /><Header /><main className="relative z-10">{children}</main><Footer /></body></html>;
}
