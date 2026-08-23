import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { TrendingUp, DollarSign, Timer, User } from 'lucide-react';
import { SEOHeroDashboard } from '@/components/sections/services/on-page-seo/SEOHeroDashboard';

export const onPageSeoData: ServicePageData = {
  slug: 'on-page-seo',
  hero: {
    titleHtml: (
      <>Best <span className="text-[#FF6A00]">On Page SEO</span><br className="hidden lg:block" /> Strategy Guide for<br className="hidden lg:block" /> Growing Businesses</>
    ),
    description: "Everything you need to know about on page SEO — the types of on page SEO, how to check on page SEO issues, and the strategies that consistently move rankings.",
    buttonText: "Get a Free SEO Audit",
    buttonLink: "/contact",
    rightComponent: <SEOHeroDashboard />
  },
  importance: {
    titleHtml: <><span className="text-[#FF6A00]">On Page SEO</span> Services in Ahmedabad</>,
    heading: "What Makes On Page SEO Important for Your Website?",
    paragraphs: [
      "On page refers to everything you can optimize directly on your website's pages to help them rank higher and attract the right visitors — your title tag, headings, keyword usage, internal links, images, and overall page experience.",
      "It's different from off-page SEO (backlinks, mentions) and technical SEO (speed, crawlability). On-page SEO is the part fully within your control, and it's the foundation everything else is built on. Get it right, and search engines can clearly understand and reward your content.",
      "This is exactly why on page deserves priority — without it, even the best off-page campaigns struggle to hold rankings long-term."
    ],
    imageSrc: "/images/on-page-seo-diagram.webp",
    imageAlt: "On Page SEO Diagram"
  },
  statBand: {
    badge: "Why We Focus On It",
    title: "Why On-Page SEO Still Matters in 2026",
    paragraphs: [
      "Search engines have gotten smarter, but they still rely heavily on well-optimized pages to understand relevance, intent, and trustworthiness."
    ],
    statCards: [
      { value: "+18%", label: "Avg. organic traffic growth", highlightColor: "#FFF1E6" },
      { value: "+24", label: "Keywords moved to page 1", highlightColor: "#FFF1E6" },
      { value: "+9%", label: "Monthly lead growth", icon: "users", highlightColor: "#FFF1E6" },
      { value: "98%", label: "Client satisfaction rate", icon: "target", highlightColor: "#FFF1E6" },
    ],
    quote: "On-page SEO isn't a one-time task — it's the ongoing groundwork that makes every other SEO effort actually pay off."
  },
  tools: {
    title: "Tools We Use For On Page SEO",
    subtitle: "",
    tools: [
      { name: 'Ahrefs', logo: '/images/tools/ahrefs-logo.webp' },
      { name: 'ChatGPT', logo: '/images/tools/chat-gpt.webp' },
      { name: 'Moz', logo: '/images/tools/moz-seo-tools.webp' },
      { name: 'PageSpeed Insights', logo: '/images/tools/pagespeed.webp' },
      { name: 'SEMRush', logo: '/images/tools/Semrush.webp' },
      { name: 'Claude 6', logo: '/images/tools/claude.webp' },
    ]
  },
  implement: {
    badge: "Types of On Page SEO",
    title: "Things We Implement in On Page SEO",
    description: "On page SEO isn't one task — it's a collection of elements working together. Here are the types of on page SEO covered on every project.",
    items: [
      { id: "1", icon: 'Aa', title: 'Title Tag Optimization', description: 'Clickable headline in search results, kept under 60 characters with your keyword near the front.' },
      { id: "2", icon: '≡', title: 'Meta Description Optimization', description: 'The short summary under your title tag that directly influences click-through rate.' },
      { id: "3", icon: 'H', title: 'Header Tag Structure', description: 'H1–H6 tags organized logically for readers and search engines alike.' },
      { id: "4", icon: '✎', title: 'Content Optimization', description: 'Natural keyword placement, real depth, and full alignment with search intent.' },
      { id: "5", icon: '🔗', title: 'Internal Linking', description: 'Connecting related pages to spread authority and guide visitors further into your site.' },
      { id: "6", icon: '🖼', title: 'Image Optimization', description: 'Descriptive file names, useful alt text, and properly compressed file sizes.' },
      { id: "7", icon: '/url', title: 'URL Structure', description: 'Short, descriptive, keyword-friendly URLs that are easy to read and share.' },
      { id: "8", icon: '{ }', title: 'Schema Markup', description: 'Structured data that helps search engines display rich, eye-catching results.' },
    ]
  },
  checklist: {
    title: "Your Quick On Page SEO Checklist",
    descriptionHtml: <>Before optimizing anything, you need to know where you stand.<br />Here's how to check on page SEO issues without an expensive tool subscription.</>,
    columns: ["Element", "What to Check", "Quick Tool"],
    rows: [
      { element: "Title Tag", check: "Under 60 characters, includes keyword", tool: "Google SERP preview" },
      { element: "Meta Description", check: "Under 160 characters, compelling copy", tool: "Yoast / Screaming Frog" },
      { element: "H1 Tag", check: "One per page, matches search intent", tool: "View page source" },
      { element: "Content Length", check: "Matches or exceeds top-ranking pages", tool: "Manual competitor check" },
      { element: "Internal Links", check: "3–5 relevant links per page", tool: "Site crawl" },
      { element: "Image Alt Text", check: "Descriptive and keyword-relevant", tool: "Inspect element" },
      { element: "Page Speed", check: "Loads in under 3 seconds", tool: "PageSpeed Insights" },
      { element: "Mobile Friendliness", check: "Passes mobile usability test", tool: "Google Search Console" },
    ],
    footerText: "If you'd rather skip the manual audit, this is exactly the kind of work covered under our on page SEO services — a trained eye spots issues in minutes that might take you hours to find."
  },
  faq: {
    badge: "FAQ",
    titleHtml: <>Frequently Asked On Page SEO Questions</>,
    items: [
      { id: "faq-1", question: "What is the difference between on-page and off-page SEO?", answer: "On-page SEO covers everything you control directly on your website — content, tags, structure. Off-page SEO covers external signals like backlinks and mentions." },
      { id: "faq-2", question: "How long does on-page SEO take to show results?", answer: "Most sites see measurable movement within 4–8 weeks, though competitive keywords can take longer." },
      { id: "faq-3", question: "Can I do on-page SEO myself, or do I need on-page SEO services?", answer: "You can start with the checklist above yourself. But if you want faster, more consistent results, professional on-page SEO services are usually worth it." },
      { id: "faq-4", question: "What on page SEO strategies should I prioritize first?", answer: "Start with title tags, header structure, and matching content to search intent — these on-page SEO strategies typically produce the fastest visible movement." },
      { id: "faq-5", question: "How often should I check on-page SEO?", answer: "Ideally once a quarter, or whenever you publish new content or notice a ranking drop." },
    ]
  },
  difference: {
    titleHtml: <>Why Choose Our<br />On Page SEO Services</>,
    subtitle: "",
    cards: [
      { id: "d1", title: "Proven Strategies", description: "SEO strategies built around proven optimization principles.", icon: <TrendingUp className="w-7 h-7" strokeWidth={2.5} /> },
      { id: "d2", title: "Transparent Pricing", description: "Clear pricing with no unnecessary surprises.", icon: <DollarSign className="w-7 h-7" strokeWidth={2.5} /> },
      { id: "d3", title: "Fast Turnaround", description: "Efficient execution without compromising quality.", icon: <Timer className="w-7 h-7" strokeWidth={2.5} /> },
      { id: "d4", title: "Direct Access", description: "Direct communication when you need support.", icon: <User className="w-7 h-7" strokeWidth={2.5} /> }
    ]
  },
  testimonials: [
    { id: 1, name: "Placeholder Client 1", role: "CEO, Tech Startup", text: "Our on-page SEO was a mess before this — now every page actually targets the right intent.", image: "https://ui-avatars.com/api/?name=Client+1&background=FF6A00&color=fff" },
    { id: 2, name: "Placeholder Client 2", role: "Founder, Local Business", text: "The on-page SEO audit alone uncovered issues we didn't know existed for years.", image: "https://ui-avatars.com/api/?name=Client+2&background=FF6A00&color=fff" },
    { id: 3, name: "Placeholder Client 3", role: "Marketing Director", text: "Clear on page SEO strategies, honest reporting, and steady organic growth every month.", image: "https://ui-avatars.com/api/?name=Client+3&background=FF6A00&color=fff" },
  ]
};
