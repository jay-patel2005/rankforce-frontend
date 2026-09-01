import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { TrendingUp, DollarSign, Timer, User } from 'lucide-react';
import { EcommerceHeroDashboard } from '@/components/sections/services/ecommerce-seo/EcommerceHeroDashboard';
export const ecommerceSeoData: ServicePageData = {
  slug: 'ecommerce-seo',
  hero: {
    titleHtml: (
      <>Best <span className="text-[#FF6A00]">Ecommerce SEO Service</span> Guide for Growing Online Stores</>
    ),
    description: "Everything you need to know about ecommerce SEO — the types of SEO your store needs, the common issues costing you sales, and the strategies that consistently move rankings.",
    buttonText: "Get a Free SEO Audit",
    buttonLink: "/contact",
    rightComponent: <EcommerceHeroDashboard />
  },
  importance: {
    titleHtml: <><span className="text-[#FF6A00]">Ecommerce SEO</span> Services In India</>,
    heading: "What Makes Ecommerce SEO Important for Your Store?",
    paragraphs: [
      "Here's the thing about running an online store — you can have the best products in your niche and still lose to a competitor with a weaker catalog, just because they show up first on Google. That's the whole job of an ecommerce SEO service: making sure your product pages actually get found by people who are ready to buy, not just people browsing around.",
      "Normal SEO deals with a handful of pages. Ecommerce is a different beast entirely — hundreds, sometimes thousands, of product URLs, filters, out-of-stock listings, and a checkout flow that Google still has to crawl without tripping over itself.",
      "So yes, an ecommerce SEO service looks nothing like a standard SEO package, and it shouldn't. It's built around your whole catalog, not a handful of landing pages, and it needs to keep working as your store adds new products every month."
    ],
    imageSrc: "/images/services/ecommerce-seo-diagram.webp",
    imageAlt: "Ecommerce SEO Diagram",
    layoutVariant: 'wide-image'
  },
  statBand: {
    badge: "Why We Focus On It",
    title: "Why Ecommerce SEO Still Matters in 2026",
    paragraphs: [
      "Ads get expensive fast, marketplaces take a cut of every sale, and social commerce is still figuring itself out. Organic search is one of the few channels where traffic keeps coming without a per-click bill."
    ],
    statCards: [
      { value: "22%", label: "Avg. organic traffic growth", highlightColor: "#FFF1E6" },
      { value: "+30", label: "Product keywords ranked page 1", highlightColor: "#FFF1E6" },
      { value: "+14%", label: "Monthly sales growth", icon: "users", highlightColor: "#FFF1E6" },
      { value: "97%", label: "Client retention rate", icon: "target", highlightColor: "#FFF1E6" },
    ],
    quote: "An ecommerce SEO service isn't a one-time setup — it's the ongoing engine that keeps every product page working for you."
  },
  tools: {
    title: "Tools We Use For Ecommerce SEO",
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
    badge: "Types of Ecommerce SEO",
    title: "Things We Implement in Ecommerce SEO",
    description: "Ecommerce SEO isn't one single fix — it's a bunch of moving parts that work together. Here's what our ecommerce SEO company actually does, page by page, for every store we take on.",
    items: [
      { id: "1", icon: '🛒', title: 'Product Page Optimization', description: 'Unique product descriptions, optimized titles, and keyword-rich content that drives conversions.' },
      { id: "2", icon: '🗂️', title: 'Category & Collection SEO', description: 'Category pages are where the bigger, broader keywords live — the ones your individual products cant compete for alone. Get the structure right, and these pull in serious traffic.' },
      { id: "3", icon: '🔍', title: 'Site Speed & Core Web Vitals', description: 'A slow product page loses sales before the customer even sees what you are selling. Core Web Vitals matter for rankings — and for the sale that almost happened.' },
      { id: "4", icon: '⚙️', title: 'Technical SEO for Ecommerce', description: 'Crawl budget, faceted navigation, canonical tags — the unglamorous stuff nobody notices until it breaks something. Out-of-stock products get handled properly too.' },
      { id: "5", icon: '{ }', title: 'Schema Markup (Product Schema)', description: 'Structured data for price, stock, and reviews so your listing stands out in results, instead of blending in with ten other blue links.' },
      { id: "6", icon: '⚡', title: 'Image Optimization', description: 'Compressed images, proper alt text, faster load times — a small piece on its own, but it also feeds Google Shopping and image search, which most stores ignore.' },
      { id: "7", icon: '📱', title: 'Content & Blog Strategy', description: 'Buying guides, comparisons, "how to choose" posts — content people read before they have decided what to buy, and that keeps them coming back once they have.' },
      { id: "8", icon: '🔗', title: 'Site Architecture & Internal Linking', description: 'Every product should be reachable in three clicks, tops. Related items link to each other naturally instead of forcing shoppers, and Google, to dig around.' },
    ]
  },
  checklist: {
    title: "Your Quick Ecommerce SEO Checklist",
    descriptionHtml: <>Want to know where your store actually stands before spending a rupee on tools? Run through<br />this list yourself first — most of it takes fifteen minutes.</>,
    columns: ["Element", "What to Check", "Impact"],
    rows: [
      { element: "Product Titles", check: "Under 60 characters, includes main keyword", tool: "Google SERP preview" },
      { element: "Meta Descriptions", check: "Under 160 characters, compelling copy", tool: "Yoast / Screaming Frog" },
      { element: "Product URLs", check: "Short, clean, no dynamic parameters", tool: "Manual audit" },
      { element: "Duplicate Content", check: "No copy-pasted manufacturer descriptions", tool: "Copyscape / Siteliner" },
      { element: "Site Speed", check: "Under 3 seconds load on product pages", tool: "PageSpeed Insights" },
      { element: "Mobile Usability", check: "Fully responsive, easy checkout on mobile", tool: "Google Search Console" },
      { element: "Internal Linking", check: "Category pages link to related products", tool: "Screaming Frog" },
      { element: "Schema Markup", check: "Product, price, and review schema present", tool: "Google Rich Results Test" },
    ],
    footerText: "Not in the mood for a manual audit? That's fair — it's literally what an ecommerce SEO service is for. A handful of flagged issues can be costing you sales right now without you knowing it."
  },
  faq: {badge: "FAQ",titleHtml: <>Frequently Asked Ecommerce SEO Questions</>,
    items: [
    { id: "faq-1",question: "What is ecommerce SEO?",answer:"It's the process of getting your product pages, category pages, and overall site structure to actually rank in search — instead of sitting on page four where nobody scrolls. It touches everything from what you write on a product page to how your site is built underneath it.",},  
    {id: "faq-2",question: "How is ecommerce SEO different from regular SEO?",answer:"Regular SEO might deal with ten or twenty pages. Ecommerce SEO deals with hundreds, sometimes thousands, all changing as stock comes and goes. The strategy has to work at that scale, or it doesn't work at all.",},
    {id: "faq-3",question: "How long does an ecommerce SEO service take to show results?",answer:"Most stores see rankings start to shift somewhere around the 8 to 12 week mark. The bigger sales impact usually shows up over 4 to 6 months, once more pages have had time to build authority.",},
    {id: "faq-4",question: "Why should I hire an ecommerce SEO company instead of doing it myself?",answer:"Honestly? Because a best ecommerce SEO agency has already made the mistakes on someone else's store, not yours. Once you're past a few hundred SKUs, doing it alone stops being realistic — the tools and time add up fast.",},]
  },
  difference: {
    titleHtml: <>Why Choose Our<br />Ecommerce SEO Services</>,
    subtitle: "",
   cards: [
  {id: "d1",title: "Proven Strategies",description:"Built on optimization principles that have actually worked before, not trial and error on your budget.",icon: <TrendingUp className="w-7 h-7" strokeWidth={2.5} />},
  {id: "d2",title: "Transparent Pricing",description:"You'll know what you're paying for. No vague line items, no surprise add-ons later.",icon: <DollarSign className="w-7 h-7" strokeWidth={2.5} />},
  {id: "d3",title: "Fast Turnaround",description:"We move quickly without cutting corners on the work itself.",icon: <Timer className="w-7 h-7" strokeWidth={2.5} />},
  {id: "d4",title: "Direct Access",description:"Talk to the people actually working on your store, not a rotating account manager.",icon: <User className="w-7 h-7" strokeWidth={2.5} />},
],
  },
  testimonials: [
    { id: 1, name: "Placeholder Client 4", role: "Owner, Ecommerce Store", text: "Our organic sales doubled after fixing our category structure and technical issues.", image: "https://ui-avatars.com/api/?name=Client+4&background=FF6A00&color=fff" },
    { id: 2, name: "Placeholder Client 5", role: "Marketing Director", text: "Finally an agency that understands faceted navigation and product SEO.", image: "https://ui-avatars.com/api/?name=Client+5&background=FF6A00&color=fff" },
    { id: 3, name: "Placeholder Client 6", role: "Founder, DTC Brand", text: "We rely less on paid ads now because our organic traffic is so strong.", image: "https://ui-avatars.com/api/?name=Client+6&background=FF6A00&color=fff" },
  ]
};
