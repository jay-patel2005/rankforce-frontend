import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { TrendingUp, DollarSign, Timer, User } from 'lucide-react';
import { LocalSeoHeroDashboard } from '@/components/sections/services/local-seo/LocalSeoHeroDashboard';
import { exists } from 'fs';

export const localSeoData: ServicePageData = {
  slug: 'local-seo',

  // ─── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    titleHtml: (
      <>Local <span className="text-[#FF6A00]">SEO</span> Services</>
    ),
    description:
      'Ranking nationally doesn\'t help much if the person three streets away can\'t find you. We build the kind of visibility that puts your business in front of nearby customers the moment they start searching.',
    buttonText: 'Get A Free Audit',
    buttonLink: '/contact',
    rightComponent: <LocalSeoHeroDashboard />,
  },

  // ─── IMPORTANCE ─────────────────────────────────────────────────────────────
  importance: {
    titleHtml: (
      <><span className="text-[#FF6A00]">Local SEO</span> Services in India</>
    ),
    heading: 'Why Local Businesses Need Local SEO Services',
    paragraphs: [
      `Here something most business owners dont realize until its too late: ranking well nationally and showing up for local search are two completely different games. You could sit fine on page one for a broad keyword and still be invisible to someone standing three streets away with their phone out, searching for exactly what you sell.`,
      `That's the gap this kind of work exists to close. It's not about beating everyone in the country. It's about being the first name a nearby customer sees, whether they are checking Google Maps, typing into the search bar, or asking a voice assistant where the nearest option is.`,
      `For a shop, clinic, restaurant, or service business working out of a fixed address, local seo services for small business owners aren't a nice-to-have anymore. They're the difference between a phone that rings and one that doesn't.`,
    ],
    imageSrc: '/images/services/local-seo-diagram.webp',
    imageAlt: 'local seo',
    layoutVariant: 'wide-image',
  },

  // ─── STAT BAND ──────────────────────────────────────────────────────────────
  statBand: {
    badge: 'Why we focus on it',
    title: 'Why Ecommerce SEO Still Matters in 2026',
    paragraphs: [
      'Paid ads dry up the second you stop paying for them. Directory listings get buried under a dozen competitors. Local search, done properly, keeps sending customers your way long after the setup work is finished.',
    ],
    statCards: [
      { value: '+40%',  label: 'Avg. Google Maps visibility',highlightColor: '#FFF1E6' },
      { value: 'Top 3', label: 'Local pack rankings achieved',highlightColor: '#FFF1E6' },
      { value: '+18%', label: 'Monthly calls & footfall growth',icon: 'users', highlightColor: '#FFF1E6' },
      { value: '95%', label: 'Client retention rate',icon: 'target', highlightColor: '#FFF1E6' },
    ],
    quote:
      'Local SEO isn a one-time listing update — it s the ongoing work that keeps your business the obvious choice nearby.',
  },

  // ─── TOOLS ──────────────────────────────────────────────────────────────────
  tools: {
    title: 'Tools We Use For Local SEO',
    subtitle: '',
    tools: [
      { name: 'Ahrefs',            logo: '/images/tools/ahrefs-logo.webp' },
      { name: 'ChatGPT',           logo: '/images/tools/chat-gpt.webp' },
      { name: 'Moz',               logo: '/images/tools/moz-seo-tools.webp' },
      { name: 'PageSpeed Insights',logo: '/images/tools/pagespeed.webp' },
      { name: 'SEMRush',           logo: '/images/tools/Semrush.webp' },
      { name: 'Claude 6',          logo: '/images/tools/claude.webp' },
    ],
  },

  // ─── IMPLEMENT ──────────────────────────────────────────────────────────────
  implement: {
  badge: 'WHAT WE DO',

  title: 'Things We Implement in Our Local SEO Services',

  description:
    "Local SEO isn't one setting you flip and forget — it's a handful of moving parts working together. Here's what our affordable local SEO services actually cover for every business we take on.",

  items: [
    {
      id: '1',
      icon: '📍',
      title: 'Google Business Profile Optimization',
      description:
        'Your listing is often the first thing a customer sees before they ever open your site. We get the categories, photos, hours, and posts right so it pulls its weight.',
    },

    {
      id: '2',
      icon: '🗺️',
      title: 'Local Citations & NAP Consistency',
      description:
        'Your business name, address, and phone number need to match everywhere online. Inconsistent listings confuse Google and quietly cost you rankings.',
    },

    {
      id: '3',
      icon: '🔎',
      title: 'Local Keyword Research',
      description:
        'We find the exact phrases people nearby type in before they call or visit, not generic industry terms nobody local is actually searching for.',
    },

    {
      id: '4',
      icon: '📍',
      title: 'On-Page Local SEO',
      description:
        'Location pages, city mentions, and schema markup that tell Google exactly where you operate and who you serve.',
    },

    {
      id: '5',
      icon: '⭐',
      title: 'Review Management',
      description:
        'More reviews, better responses, and a system for asking happy customers at the right moment. Reviews influence local visibility and customer trust.',
    },

    {
      id: '6',
      icon: '🔗',
      title: 'Local Link Building',
      description:
        'Getting mentioned and linked from local directories, news sites, and community pages that actually carry weight with Google.',
    },

    {
      id: '7',
      icon: '📝',
      title: 'Local Content Marketing',
      description:
        'Blog posts, guides, and location pages built around what your neighborhood is actually searching for — this is where a proper local SEO marketing service earns its fee.',
    },

    {
      id: '8',
      icon: '📱',
      title: 'Mobile & Local Site Speed',
      description:
        "Most local searches happen on a phone, often while someone is already walking or driving. A slow site loses that customer before they even see your number.",
    },
  ],
},

  // ─── CHECKLIST ──────────────────────────────────────────────────────────────
  checklist: {
  title: 'Your Quick Local SEO Checklist',

  descriptionHtml: (
    <>
      Curious where your business actually stands before spending anything? Run through this list
      <br />
      yourself first. Most of it takes fifteen minutes.
    </>
  ),

  columns: ['Element', 'What to Check', 'Quick Tool'],

  rows: [
    { element: 'Google Business Profile',check: 'Complete, verified, categories accurate',tool: 'Google Business Profile',},
    { element: 'NAP Consistency',check: 'Same name, address, phone everywhere',tool: 'BrightLocal',},
    {element: 'Reviews',check: 'Steady flow, responded to, nothing ignored',tool: 'Google Business Profile',},
    {element: 'Local Keywords',check: 'City and area names used naturally on key pages',tool: 'Ubersuggest',},
    {element: 'Website Speed',check: 'Loads under 3 seconds on mobile',tool: 'PageSpeed Insights',},
    {element: 'Local Citations',check: 'Listed on major directories, no duplicates',tool: 'Moz Local',},
    {element: 'Schema Markup',check: 'LocalBusiness schema present and correct',tool: 'Google Rich Results Test',},
    {element: 'Map Pack Ranking',check: 'Appears in top 3 for main local searches',tool: 'Manual search / BrightLocal',},
  ],

  footerText:
    "Not in the mood for a manual audit? Fair enough — that's exactly what local SEO services are for. A few small fixes can be quietly costing you calls right now.",
},
  // ─── FAQ ────────────────────────────────────────────────────────────────────
 faq: {
  badge: 'FAQ',

  titleHtml: <>Frequently Asked Local SEO Questions</>,

  items: [
    {
      id: 'faq-1',
      question: 'What are local SEO services?',
      answer:
        "It's the work that gets your business showing up for nearby searches: Google Maps, the local pack, and location-based search results. It covers your Google Business Profile, citations, reviews, and location-specific content, among other things.",
    },

    {
      id: 'faq-2',
      question: 'Do you offer local SEO services for small business owners on a tight budget?',
      answer:
        "Yes. Most of our clients run small, single-location operations, not national chains. We scope the work around what actually moves the needle for a business your size, not a package built for someone three times bigger.",
    },

    {
      id: 'faq-3',
      question: 'What makes your local SEO services in India different?',
      answer:
        "We work with local search patterns, city-level competition, and directory ecosystems that are specific to Indian markets. That's a different job from applying a generic international playbook and hoping it fits.",
    },

    {
      id: 'faq-4',
      question: 'Are affordable local SEO services actually effective, or just cheap?',
      answer:
        "Affordable doesn't mean stripped down here. It means cutting the parts of a big-agency retainer that don't apply to a single-location business, not the parts that actually move rankings.",
    },

    {
      id: 'faq-5',
      question: 'Why hire a local SEO marketing service instead of managing it myself?',
      answer:
        "You can handle pieces of it yourself, and plenty of owners do. But between citations, reviews, technical fixes, and content, it adds up to more hours than most business owners have spare in a week.",
    },
  ],
},

  // ─── WHY CHOOSE ─────────────────────────────────────────────────────────────
  difference: {
  titleHtml: (
    <>Why Choose Our<br />Local SEO Services</>
  ),
  subtitle: '',
  cards: [
    {
      id: 'd1',
      title: 'Local Market Knowledge',
      description: 'We know how local search behaves city by city, not just in theory.',
      icon: <TrendingUp className="w-7 h-7" strokeWidth={2.5} />,
    },
    {
      id: 'd2',
      title: 'Transparent Pricing',
      description: "You'll know exactly what you're paying for. No vague line items, no surprise add-ons later.",
      icon: <DollarSign className="w-7 h-7" strokeWidth={2.5} />,
    },
    {
      id: 'd3',
      title: 'Fast Turnaround',
      description: 'Listings and fixes go live quickly, without cutting corners on the work itself.',
      icon: <Timer className="w-7 h-7" strokeWidth={2.5} />,
    },
    {
      id: 'd4',
      title: 'Direct Access',
      description: 'Talk to the person actually doing the work, not an account manager reading updates off a spreadsheet.',
      icon: <User className="w-7 h-7" strokeWidth={2.5} />,
    },
  ],
},
  // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
 testimonials: [
  {
    id: 1,
    name: 'Placeholder Client 1',
    role: 'Local Restaurant Chain',
    text: "We used to be invisible on Google Maps. Now we're the first result people see, and it shows up in the walk-ins.",
    image: 'https://ui-avatars.com/api/?name=Client+1&background=FF6A00&color=fff',
  },
  {
    id: 2,
    name: 'Placeholder Client 2',
    role: 'Home Services Business',
    text: 'The local SEO audit flagged listing issues our last agency never even mentioned.',
    image: 'https://ui-avatars.com/api/?name=Client+2&background=FF6A00&color=fff',
  },
  {
    id: 3,
    name: 'Placeholder Client 3',
    role: 'Dental Clinic',
    text: 'Straightforward reporting, no jargon, and calls that picked up within the first couple of months.',
    image: 'https://ui-avatars.com/api/?name=Client+3&background=FF6A00&color=fff',
  }
 ],
}; 
