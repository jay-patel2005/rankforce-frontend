import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { TrendingUp, DollarSign, Timer, User } from 'lucide-react';
import { AeoGeoHeroDashboard } from '@/components/sections/services/aeo-geo/AeoGeoHeroDashboard';

export const aeoGeoData: ServicePageData = {
  slug: 'aeo-geo',

  // ─── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    badge: 'AEO and GEO SERVICES',
    titleHtml: (
      <><span className="text-[#FF6A00]">AEO And GEO </span>Services</>
    ),
    description:
      'Everything you need to know about AEO and GEO — what they mean, why AI search is changing visibility, and the strategies that get your brand quoted inside AI-generated answers.',
    buttonText: 'Get a Free SEO Audit →',
    buttonLink: '/contact',
    rightComponent: <AeoGeoHeroDashboard />,
  },

  // ─── IMPORTANCE ─────────────────────────────────────────────────────────────
  importance: {
    titleHtml: (
      <><span className="text-[#FF6A00]">AEO and GEO Services</span> in Ahmedabad</>
    ),
    heading: 'What Makes AEO and GEO Important for Your Website?',
    paragraphs: [
      `Search doesn't look the way it did two years ago. People ask ChatGPT and Google's AI Overview a question and get an answer right there, no click required — and if your brand isn't the one being quoted, you basically don't exist in that moment. That's the whole reason aeo and geo has become the thing every serious business is asking about now.`,
      `AEO, answer engine optimization, is about structuring your content so tools like Google's AI Overview or Perplexity can actually pull your answer and use it. GEO, generative engine optimization, goes a step further — it's about getting mentioned inside the answers ChatGPT and Gemini generate, not just the results below them.`,
      `Put simply, aeo and geo is what SEO is turning into as more people search through AI instead of typing into a search bar. Ignore it now, and you're optimizing for a channel that's slowly becoming secondary.`,
    ],
    imageSrc: '/images/services/aeo-geo.webp', // Can use existing placeholder image
    imageAlt: 'AEO and GEO visualization',
    layoutVariant: 'wide-image',
  },

  // ─── STAT BAND ──────────────────────────────────────────────────────────────
  statBand: {
    badge: 'Why we focus on it',
    title: 'Why AEO and GEO Still Matter in 2026',
    paragraphs: [
      'More searches now end without a single click to any website — the answer just shows up on the results page or inside a chat window. Brands that show up inside those AI-generated answers get visibility that used to belong purely to the #1 organic result.',
    ],
    statCards: [
      { value: '+27%', label: 'Avg. visibility across AI answers', highlightColor: '#FFF1E6' },
      { value: '+19', label: 'AI-cited mentions per month', highlightColor: '#FFF1E6' },
      { value: '+11%', label: 'Increase in branded search', highlightColor: '#FFF1E6' },
      { value: '96%', label: 'Client retention rate', highlightColor: '#FFF1E6' },
    ],
    quote:
      '"AEO and GEO isn\'t a replacement for SEO — it\'s what happens when SEO has to survive inside an answer, not just a results page."',
  },

  // ─── TOOLS ──────────────────────────────────────────────────────────────────
  tools: {
    title: 'Tools We Use For AEO and GEO',
    subtitle: '',
    tools: [
      { name: 'Ahrefs', logo: '/images/tools/ahrefs-logo.webp' },
      { name: 'SEMrush', logo: '/images/tools/Semrush.webp' },
      { name: 'Perplexity', logo: '/images/tools/chat-gpt.webp' }, // Placeholder logo for perplexity
      { name: 'Search Console', logo: '/images/tools/pagespeed.webp' },
      { name: 'SurferSEO', logo: '/images/tools/ahrefs-logo.webp' },
      { name: 'Similarweb', logo: '/images/tools/Semrush.webp' },
    ],
  },

  // ─── IMPLEMENT ──────────────────────────────────────────────────────────────
  implement: {
    badge: 'TYPES OF OPTIMIZATION',
    title: 'Things We Implement in AEO and GEO',
    description:
      "AEO and GEO in SEO isn't one checkbox you tick and forget — it's a handful of things working together so AI tools trust and quote your content. Here's what our team actually does, piece by piece.",
    items: [
      {
        id: '1',
        icon: '📝',
        title: 'Answer-First Content Structure',
        description:
          'We rewrite key pages so the direct answer sits right at the top, in plain language, before any of the supporting detail — the format AI tools tend to pull from first.',
      },
      {
        id: '2',
        icon: '📐',
        title: 'Structured Data & Schema Markup',
        description:
          'FAQ schema, how-to schema, and entity markup that hand search engines and AI crawlers a clean, labeled version of your content to work with.',
      },
      {
        id: '3',
        icon: '🏗️',
        title: 'Entity & Brand Authority Building',
        description:
          'Consistent brand mentions, citations, and profile signals across the web, so AI models recognize your business as a real, trustworthy entity worth quoting.',
      },
      {
        id: '4',
        icon: '💬',
        title: 'Conversational Query Optimization',
        description:
          "Content written around how people actually talk to AI tools — full questions, not just fragment keywords — since that's what these tools match against.",
      },
      {
        id: '5',
        icon: '🔍',
        title: 'AI Overview & Snippet Tracking',
        description:
          "Regular tracking of where your brand shows up, or doesn't, inside Google's AI Overview, Perplexity answers, and featured snippets.",
      },
      {
        id: '6',
        icon: '✨',
        title: 'Content Clarity & Fact Density',
        description:
          "Tighter writing with clear facts, numbers, and definitions upfront — AI models tend to favor content that's easy to extract a clean answer from.",
      },
      {
        id: '7',
        icon: '🌐',
        title: 'Multi-Platform Presence',
        description:
          "Getting your brand referenced across Reddit threads, review sites, and forums that large language models are trained on and pull citations from.",
      },
      {
        id: '8',
        icon: '📊',
        title: 'Ongoing AI Search Monitoring',
        description:
          "Monthly check-ins on how AI platforms are representing your brand, since these answers shift as models get updated.",
      },
    ],
  },

  // ─── CHECKLIST ──────────────────────────────────────────────────────────────
  checklist: {
    title: 'Your Quick AEO and GEO Checklist',
    descriptionHtml: (
      <>
        Before you spend on anything, here's a rough gauge of where your content already stands with AI search.
        <br />
        Most of this takes fifteen minutes to check yourself.
      </>
    ),
    columns: ['Element', 'What to Check', 'Quick Tool'],
    rows: [
      { element: 'Direct Answers', check: 'Key pages answer the main question in the first 2-3 lines', tool: 'Manual review' },
      { element: 'FAQ Schema', check: 'FAQ markup present on service and product pages', tool: 'Google Rich Results Test' },
      { element: 'Brand Mentions', check: 'Business name appears across review sites and forums', tool: 'Google search' },
      { element: 'AI Overview Presence', check: 'Brand shows up in AI Overview for target queries', tool: 'Manual search check' },
      { element: 'Entity Consistency', check: 'Same business name, address, details everywhere online', tool: 'Manual audit' },
      { element: 'Content Depth', check: 'Pages answer follow-up questions, not just the main one', tool: 'Manual review' },
      { element: 'Chatbot Visibility', check: 'Brand gets mentioned when asked directly in ChatGPT', tool: 'Direct testing' },
      { element: 'Update Frequency', check: 'Key pages refreshed in the last 6 months', tool: 'CMS check' },
    ],
    footerText:
      "If most of these came back as 'not yet,' that's fairly normal — this is still new territory for most businesses. It's also exactly where an aeo and geo services provider earns its fee.",
  },

  // ─── FAQ ────────────────────────────────────────────────────────────────────
  faq: {
    badge: 'FAQ',
    titleHtml: <>Frequently Asked AEO and GEO Questions</>,
    items: [
      {
        id: 'faq-1',
        question: 'What is AEO and GEO?',
        answer:
          "AEO stands for answer engine optimization, and GEO stands for generative engine optimization. Together, they're about getting your content picked up and quoted by AI tools like Google's AI Overview, ChatGPT, and Perplexity, rather than just ranking on a traditional results page.",
      },
      {
        id: 'faq-2',
        question: "What's the difference between AEO and GEO?",
        answer:
          "AEO is mostly focused on getting direct answers pulled into search features like featured snippets and AI Overviews. GEO is broader — it's about your brand actually being cited or mentioned when someone asks a generative AI tool a question, even outside of Google entirely.",
      },
      {
        id: 'faq-3',
        question: 'Is AEO and GEO in SEO the same thing as traditional SEO?',
        answer:
          "Not exactly, though they overlap a lot. Traditional SEO still matters for rankings and clicks, but aeo and geo in SEO is specifically about how your content performs inside AI-generated answers, which follow different rules than a ranked list of blue links.",
      },
      {
        id: 'faq-4',
        question: 'How do I know if AEO and GEO services are worth it for my business?',
        answer:
          "If your customers research before buying, and a lot of them do, there's a good chance they're already asking AI tools questions your competitors are answering and you're not. That gap is usually the clearest sign it's worth it.",
      },
    ],
  },

  // ─── WHY CHOOSE ─────────────────────────────────────────────────────────────
  difference: {
    titleHtml: (
      <>Why Choose Our<br />AEO and GEO Services</>
    ),
    subtitle: '',
    cards: [
      {
        id: 'd1',
        title: 'Proven Strategies',
        description: "Built on what's actually working right now in AI search, not recycled SEO tactics with a new label.",
        icon: <TrendingUp className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd2',
        title: 'Transparent Pricing',
        description: 'Clear pricing with no unnecessary surprises.',
        icon: <DollarSign className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd3',
        title: 'Fast Turnaround',
        description: 'Efficient execution without compromising quality.',
        icon: <Timer className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd4',
        title: 'Direct Access',
        description: 'Direct communication with the team when you need it.',
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
      text: "We used to get zero visibility from AI Overviews. Now we're consistently quoted for our main services, and our branded search is up 15%.",
      image: 'https://ui-avatars.com/api/?name=Client+1&background=FF6A00&color=fff',
    },
    {
      id: 2,
      name: 'Placeholder Client 2',
      role: 'E-commerce Store',
      text: "Getting our brand cited in ChatGPT answers completely changed how people discover us during their research phase.",
      image: 'https://ui-avatars.com/api/?name=Client+2&background=FF6A00&color=fff',
    },
    {
      id: 3,
      name: 'Placeholder Client 3',
      role: 'Healthcare Clinic',
      text: "Our structured data was a mess. Fixing it finally got our FAQs showing up directly in search results and AI answers.",
      image: 'https://ui-avatars.com/api/?name=Client+3&background=FF6A00&color=fff',
    },
  ],
};
