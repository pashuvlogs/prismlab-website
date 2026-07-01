import type { Metadata } from "next";
import { Sora, DM_Sans, Space_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

// Elegant italic serif, used ONLY for the single hero accent word.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prismlab.app"),
  title: "PrismLab: Money, in focus",
  description:
    "A personal-finance app for people who take money seriously. Every account, every currency, and a real FIRE plan, in one clear picture of when you can stop working.",
  keywords: [
    "personal finance",
    "FIRE calculator",
    "multi-currency",
    "net worth",
    "budgeting",
    "statement import",
    "expat finance",
  ],
  openGraph: {
    title: "PrismLab: Money, in focus",
    description:
      "Every account, every currency, and a real FIRE plan, in one clear picture of when you can stop working.",
    url: "https://prismlab.app",
    siteName: "PrismLab",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} ${spaceMono.variable} ${newsreader.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
