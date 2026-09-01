import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

import ScrollToTop from "@/components/layout/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rank Force — Freelance SEO Expert | Grow Your Leads & Sales",
    template: "%s | Rank Force",
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
    "Rank Force",
  ],
  authors: [{ name: "JD", url: "https://rankforce.in" }],
  creator: "JD",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rankforce.in",
    siteName: "Rank Force",
    title: "Rank Force — Freelance SEO Expert | Grow Your Leads & Sales",
    description:
      "Expert freelance SEO services that grow your leads, traffic, and sales.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rank Force — Freelance SEO Expert",
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
        <ScrollToTop />
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
