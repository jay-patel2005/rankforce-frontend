import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RankWithJD — Freelance SEO Expert | Grow Your Leads & Sales",
    template: "%s | RankWithJD",
  },
  description:
    "Expert freelance SEO services that grow your leads, traffic, and sales. Get transparent, results-driven SEO from JD — 4+ years experience helping businesses rank higher.",
  keywords: [
    "SEO freelancer",
    "freelance SEO expert",
    "SEO services",
    "rank higher on google",
    "local SEO",
    "ecommerce SEO",
    "technical SEO",
    "content marketing",
    "RankWithJD",
  ],
  authors: [{ name: "JD", url: "https://rankwithjd.com" }],
  creator: "JD",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rankwithjd.com",
    siteName: "RankWithJD",
    title: "RankWithJD — Freelance SEO Expert | Grow Your Leads & Sales",
    description:
      "Expert freelance SEO services that grow your leads, traffic, and sales.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RankWithJD — Freelance SEO Expert",
    description:
      "Expert freelance SEO services that grow your leads, traffic, and sales.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
