import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { TrendingUp, DollarSign, Timer, User } from 'lucide-react';
import { TechnicalSeoHeroDashboard } from '@/components/sections/services/technical-seo/TechnicalSeoHeroDashboard';

export const technicalSeoData: ServicePageData = {
  slug: 'technical-seo',

  // ─── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    badge: 'Technical SEO Services',
    titleHtml: (
      <>Technical <span className="text-[#FF6A00]">SEO</span> Services</>
    ),
    description:
      'Get a website that Google can actually crawl, index and rank without any hiccups. Our technical SEO services fix the stuff hiding under the hood, so every page you publish has a real shot at ranking.',
    buttonText: 'Get A Free Audit',
    buttonLink: '/contact',
    rightComponent: <TechnicalSeoHeroDashboard />,
  },

  // ─── IMPORTANCE ─────────────────────────────────────────────────────────────
  importance: {
    titleHtml: (
      <><span className="text-[#FF6A00]">Technical SEO</span> Experts in India</>
    ),
    heading: 'What Is Technical SEO and Why Your Website Needs It',
    paragraphs: [
      `So, what is technical seo, really? It's everything that happens behind the scenes of your website: how fast it loads, whether Google can crawl every page, how your URLs are structured, and whether your site sends the right signals to search engines. None of it is visible to a visitor, but all of it decides whether your content even gets a chance to rank.`,
      `You can write the best blog post on the internet and still get buried on page five if your site has broken redirects, duplicate URLs, or a robots.txt file quietly blocking half your pages. That's the part most business owners never think to check.`,
      `A lot of people confuse this with content writing or link building. It's neither. Technical seo in digital marketing sits underneath both of those, and if the foundation is shaky, nothing built on top of it works the way it should.`,
    ],
    imageSrc: '/images/services/aeo.webp',
    imageAlt: 'technical seo audit diagram',
    layoutVariant: 'wide-image',
  },

  // ─── STAT BAND ──────────────────────────────────────────────────────────────
  statBand: {
  badge: 'WHY WE FOCUS ON IT',

  title: 'Why Is Technical SEO Important for Long-Term Growth',

  paragraphs: [
    "Rankings built on a solid technical foundation don't disappear the moment Google rolls out an algorithm update. Loose ends do, and that's usually the difference between a site that keeps growing and one that quietly plateaus.",
  ],

  statCards: [
    {
      value: '+40%',
      label: 'Crawl efficiency improvement',
      highlightColor: '#FFF1E6',
    },
    {
      value: '+25',
      label: 'Pages re-indexed within 30 days',
      highlightColor: '#FFF1E6',
    },
    {
      value: '2.1s',
      label: 'Avg. page load after fixes',
      highlightColor: '#FFF1E6',
    },
    {
      value: '96%',
      label: 'Client retention rate',
      highlightColor: '#FFF1E6',
    },
  ],

  quote:
    "Why is technical seo important is a question we hear from nearly every new client, and honestly, it's because it decides whether the rest of your SEO work even gets a chance to count.",
},

  // ─── TOOLS ──────────────────────────────────────────────────────────────────
  tools: {
    title: 'Tools We Use For Technical SEO',
    subtitle: '',
    tools: [
      { name: 'Screaming Frog',    logo: '/images/tools/ahrefs-logo.webp' },
      { name: 'Ahrefs',            logo: '/images/tools/ahrefs-logo.webp' },
      { name: 'Google Search Console', logo: '/images/tools/pagespeed.webp' },
      { name: 'PageSpeed Insights',logo: '/images/tools/pagespeed.webp' },
      { name: 'SEMRush',           logo: '/images/tools/Semrush.webp' },
      { name: 'ChatGPT',           logo: '/images/tools/chat-gpt.webp' },
    ],
  },

  // ─── IMPLEMENT ──────────────────────────────────────────────────────────────
  implement: {
  badge: 'WHAT WE FIX',
  title: 'What Our Technical SEO Services Include',
  description:
    "Technical SEO isn't a single task you tick off once. It's an ongoing list of checks that keeps your site healthy as it grows, and here's what that actually looks like, page by page. That's the role technical SEO in digital marketing plays: unglamorous, invisible, and completely non-negotiable.",
  items: [
    {
      id: '1',
      icon: '☀️',
      title: 'Site Crawlability & Indexing',
      description:
        "We check exactly what Google can and can't see, fix robots.txt errors, and clear up pages accidentally sitting behind a noindex tag.",
    },
    {
      id: '2',
      icon: '◷',
      title: 'Site Speed & Core Web Vitals',
      description:
        "Slow pages lose rankings and visitors before they even finish loading. We trim the weight and fix whatever's dragging your load times down.",
    },
    {
      id: '3',
      icon: '▣',
      title: 'XML Sitemaps & URL Structure',
      description:
        'Clean, logical URLs and an up to date sitemap, so search engines find new pages the moment they go live.',
    },
    {
      id: '4',
      icon: '▯',
      title: 'Mobile SEO & Responsiveness',
      description:
        'Most searches happen on a phone now, and Google checks the mobile version of your site first, not the desktop one.',
    },
    {
      id: '5',
      icon: '⌗',
      title: 'Schema Markup',
      description:
        'Structured data that helps your listing stand out with reviews, prices, or FAQs shown right in the search result.',
    },
    {
      id: '6',
      icon: '⊞',
      title: 'Canonicalization & Duplicate Content',
      description:
        "Fixing duplicate URLs and canonical tags so Google isn't left guessing which version of a page to rank.",
    },
    {
      id: '7',
      icon: '🔒',
      title: 'HTTPS & Site Security',
      description:
        'A secure, properly configured site, since Google treats security signals as a baseline ranking factor now.',
    },
    {
      id: '8',
      icon: '⊕',
      title: 'Internal Linking & Site Architecture',
      description:
        'A structure where every page sits a few clicks from the homepage, so nothing important gets lost in the crawl.',
    },
  ],
},

  // ─── CHECKLIST ──────────────────────────────────────────────────────────────
  checklist: {
  title: 'Your Quick Technical SEO Checklist',
  descriptionHtml: (
    <>
      Want to know where your site actually stands before spending anything on fixing it? Run through
      <br />
      this list yourself first, most of it takes under twenty minutes.
    </>
  ),
  columns: ['Element', 'What to Check', 'Quick Tool'],
  rows: [
    {
      element: 'Site Speed',
      check: 'Loads under 3 seconds on mobile',
      tool: 'PageSpeed Insights',
    },
    {
      element: 'Crawlability',
      check: "robots.txt isn't blocking key pages",
      tool: 'Screaming Frog',
    },
    {
      element: 'Indexing',
      check: 'Important pages are indexed in Google',
      tool: 'Search Console',
    },
    {
      element: 'HTTPS',
      check: 'Site loads securely with a valid SSL',
      tool: 'Browser address bar',
    },
    {
      element: 'Mobile Usability',
      check: 'No layout or tap-target issues',
      tool: 'Search Console',
    },
    {
      element: 'XML Sitemap',
      check: 'Sitemap submitted and up to date',
      tool: 'Search Console',
    },
    {
      element: 'Duplicate Content',
      check: 'Canonical tags set correctly',
      tool: 'Screaming Frog',
    },
    {
      element: 'Schema Markup',
      check: 'Structured data present, no errors',
      tool: 'Rich Results Test',
    },
  ],
  footerText:
    "Not in the mood to audit it yourself? Fair enough, that's exactly why we exist. A handful of overlooked issues can be quietly costing you rankings right now.",
},

  // ─── FAQ ────────────────────────────────────────────────────────────────────
  faq: {
  badge: 'FAQ',
  titleHtml: <>Frequently Asked Questions About Technical SEO Services</>,
  items: [
    {
      id: 'faq-1',
      question: 'What is technical SEO?',
      answer:
        "It's the behind-the-scenes work that makes sure Google can crawl, understand, and index your website properly. Site speed, URL structure, mobile usability, schema markup. Not the words on the page, but everything holding those words up.",
    },
    {
      id: 'faq-2',
      question: 'Does technical SEO still matter if my content is already good?',
      answer:
        "Because good content sitting on a broken foundation still doesn't rank. If Google can't crawl a page, or it takes six seconds to load, none of the effort you put into writing it matters. That's the honest answer to why technical SEO is important, and it's usually the first thing we check.",
    },
    {
      id: 'faq-3',
      question: 'How does technical SEO fit into digital marketing overall?',
      answer:
        "Technical SEO in digital marketing is the layer everything else sits on top of: content, links, paid campaigns, all of it. If your site's technical health is weak, every other channel has to work harder for the same result.",
    },
    {
      id: 'faq-4',
      question: "How do I know if I'm hiring the right team for the job?",
      answer:
        "Look for a team that actually shows you the audit instead of just handing over a vague report. The best technical SEO services walk you through what's broken, why it matters, and what gets fixed first, in language you can actually follow.",
    },
  ],
},

  // ─── WHY CHOOSE ─────────────────────────────────────────────────────────────
 difference: {
  titleHtml: (
    <>Why Choose Our<br />Technical SEO Services</>
  ),
  subtitle:
    'We build our process around what actually separates the best technical SEO services from the rest: showing our work instead of just handing over a checklist and disappearing.',
  cards: [
    {
      id: 'd1',
      title: 'Proven Fixes',
      description:
        'Built on technical audits that have actually moved rankings before, not guesswork on your site.',
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2.5} />,
    },
    {
      id: 'd2',
      title: 'Transparent Reporting',
      description:
        "You'll see exactly what was broken and what we fixed, in plain English, not a jargon-heavy PDF.",
      icon: <DollarSign className="w-7 h-7" strokeWidth={2.5} />,
    },
    {
      id: 'd3',
      title: 'Fast Turnaround',
      description:
        'Most fixes go live within days, not weeks of back and forth emails.',
      icon: <Timer className="w-7 h-7" strokeWidth={2.5} />,
    },
    {
      id: 'd4',
      title: 'Direct Access',
      description:
        "Talk to the person actually fixing your site's issues, not an account manager reading off a script.",
      icon: <User className="w-7 h-7" strokeWidth={2.5} />,
    },
  ],
},

  // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: 'Placeholder Client 1',
      role: 'SaaS Company',
      text: "We had 400+ crawl errors sitting there for months. Fixed in two weeks, and impressions climbed noticeably within the month.",
      image: 'https://ui-avatars.com/api/?name=Client+1&background=FF6A00&color=fff',
    },
    {
      id: 2,
      name: 'Placeholder Client 2',
      role: 'E-commerce Store',
      text: "Our page speed score went from 34 to 91 on mobile. Cart abandonment dropped and organic traffic improved in the next reporting period.",
      image: 'https://ui-avatars.com/api/?name=Client+2&background=FF6A00&color=fff',
    },
    {
      id: 3,
      name: 'Placeholder Client 3',
      role: 'Healthcare Clinic',
      text: "The structured data work got us FAQ rich results within six weeks. Click-through rates from organic improved noticeably.",
      image: 'https://ui-avatars.com/api/?name=Client+3&background=FF6A00&color=fff',
    },
  ],
};
