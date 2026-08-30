import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { TrendingUp, DollarSign, Timer, User } from 'lucide-react';
import { ContentMarketingHeroDashboard } from '@/components/sections/services/content-marketing/ContentMarketingHeroDashboard';

export const contentMarketingData: ServicePageData = {
  slug: 'content-marketing',

  // ─── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    badge: 'CONTENT MARKETING SERVICES',
    titleHtml: (
      <><span className="text-[#FF6A00]">Content Marketing </span> Services</>
    ),
    description:
      "Everything you need to know about content marketing services — the types of content that actually convert, how to check what's missing in your current strategy, and the approach that consistently brings in organic traffic.",
    buttonText: 'Get a Free Content Audit →',
    buttonLink: '/contact',
    rightComponent: <ContentMarketingHeroDashboard />,
  },

  // ─── IMPORTANCE ─────────────────────────────────────────────────────────────
  importance: {
    titleHtml: (
      <><span className="text-[#FF6A00]">Content Marketing Services</span> in India</>
    ),
    heading: 'What Makes Content Marketing Important for Your Business?',
    paragraphs: [
      "Most people don't buy the first time they land on your website. They read a blog, compare a few options, maybe watch a video, and only then decide who to trust with their money. That entire journey is what content marketing services are actually built for — showing up with the right piece of content at the right point in that decision, instead of just hoping an ad closes the gap.",
      "A lot of businesses treat content as an afterthought, something to post when there's spare time. That's usually why it doesn't work. Real content marketing services in india run on a plan: knowing what your audience is actually searching for, mapping content to each stage of their decision, and publishing consistently enough that it compounds instead of fading out.",
      "Done properly, content stops being a cost center and starts being the thing that brings people in organically, long after the ad budget runs out.",
    ],
    imageSrc: '/images/services/Content Marketing.webp', 
    imageAlt: 'Content Marketing visualization',
    layoutVariant: 'wide-image',
  },

  // ─── STAT BAND ──────────────────────────────────────────────────────────────
  statBand: {
    badge: 'Why we focus on it',
    title: 'Why Content Marketing Services Still Matter in 2026',
    paragraphs: [
      "Ad costs keep climbing, and the moment you stop paying, the traffic stops too. Content built around real search intent keeps working long after it's published, and it's often the reason people trust a brand enough to actually convert.",
    ],
    statCards: [
      { value: '+34%', label: 'Avg. organic traffic growth', highlightColor: '#FFF1E6' },
      { value: '+21', label: 'Pieces of content ranking page 1', highlightColor: '#FFF1E6' },
      { value: '+16%', label: 'Growth in qualified leads', highlightColor: '#FFF1E6' },
      { value: '96%', label: 'Client retention rate', highlightColor: '#FFF1E6' },
    ],
    quote:
      '"Content marketing services aren\'t about publishing more — they\'re about publishing the right piece at the right point in someone\'s decision."',
  },

  // ─── TOOLS ──────────────────────────────────────────────────────────────────
  tools: {
    title: 'Tools We Use For Content Marketing',
    subtitle: '',
    tools: [
      { name: 'Ahrefs', logo: '/images/tools/ahrefs-logo.webp' },
      { name: 'SEMrush', logo: '/images/tools/Semrush.webp' },
      { name: 'SurferSEO', logo: '/images/tools/ahrefs-logo.webp' },
      { name: 'Google Analytics 4', logo: '/images/tools/ga4.webp' },
      { name: 'Canva', logo: '/images/tools/canva.webp' },
      { name: 'Grammarly', logo: '/images/tools/grammarly.webp' },
    ],
  },

  // ─── IMPLEMENT ──────────────────────────────────────────────────────────────
  implement: {
    badge: 'Types of Content',
    title: 'Things We Implement in Content Marketing Services',
    description:
      "Content marketing isn't one blog post a month and calling it done. It's a handful of formats working together, each pulling a different type of reader in. Here's what our services for content marketing actually cover.",
    items: [
      {
        id: '1',
        icon: '📝',
        title: 'Blog Strategy & SEO Writing',
        description: 'Keyword-researched, well-structured blogs written to answer real questions people are already searching, not just fill up a content calendar.',
      },
      {
        id: '2',
        icon: '📅',
        title: 'Content Calendar Planning',
        description: 'A mapped-out schedule so publishing stays consistent instead of happening in random bursts whenever someone remembers.',
      },
      {
        id: '3',
        icon: '🏆',
        title: 'Case Studies & Social Proof Content',
        description: 'Real results turned into content that does the convincing for you, instead of another generic sales page.',
      },
      {
        id: '4',
        icon: '📱',
        title: 'Social Media Content',
        description: "Repurposed and native content built for each platform, so your blog work doesn't just sit unread on your website.",
      },
      {
        id: '5',
        icon: '✉️',
        title: 'Email Newsletter Content',
        description: 'Regular emails that keep your list warm and bring people back to your site instead of letting the relationship go cold.',
      },
      {
        id: '6',
        icon: '🎥',
        title: 'Video & Script Content',
        description: 'Short-form and long-form video scripts built around the same topics your audience is already searching for.',
      },
      {
        id: '7',
        icon: '📢',
        title: 'Content Distribution',
        description: 'Getting content in front of the right audience through the right channels, not just publishing and hoping someone finds it.',
      },
      {
        id: '8',
        icon: '📈',
        title: 'Performance Tracking & Optimization',
        description: "Regular review of what's actually ranking and converting, so budget keeps going toward what works.",
      },
    ],
  },

  // ─── CHECKLIST ──────────────────────────────────────────────────────────────
  checklist: {
    title: 'Your Quick Content Marketing Checklist',
    descriptionHtml: (
      <>
        Before spending on anything, here's a quick way to check where your content already stands. Most of this takes fifteen minutes to review yourself.
      </>
    ),
    columns: ['Element', 'What to Check', 'Quick Tool'],
    rows: [
      { element: 'Blog Consistency', check: 'New content published at least monthly', tool: 'Manual review' },
      { element: 'Keyword Targeting', check: 'Posts target real search terms, not guesses', tool: 'Ahrefs / SEMrush' },
      { element: 'Content Length & Depth', check: 'Answers the full question, not just the headline', tool: 'Manual review' },
      { element: 'Internal Linking', check: 'Blog posts link to relevant service pages', tool: 'Screaming Frog' },
      { element: 'Distribution', check: 'Content shared beyond just the blog itself', tool: 'Manual audit' },
      { element: 'Conversion Paths', check: 'Clear next step at the end of each piece', tool: 'Manual review' },
      { element: 'Content Freshness', check: 'Older posts updated, not left to go stale', tool: 'CMS check' },
      { element: 'Performance Tracking', check: 'Traffic and leads tracked per content piece', tool: 'Google Analytics 4' },
    ],
    footerText:
      "If most of this feels unfamiliar, that's completely normal. It's also exactly why content marketing services exist in the first place.",
  },

  // ─── FAQ ────────────────────────────────────────────────────────────────────
  faq: {
    badge: 'FAQ',
    titleHtml: <>Frequently Asked Content Marketing Questions</>,
    items: [
      {
        id: 'faq-1',
        question: 'What is the content marketing?',
        answer: 'Content marketing is the practice of creating and sharing useful, relevant content, blogs, videos, guides, to attract and keep an audience, with the goal of eventually turning them into customers.',
      },
      {
        id: 'faq-2',
        question: 'How is content marketing different from advertising?',
        answer: "Advertising buys attention directly and stops the moment you stop paying. Content marketing builds something that keeps working over time, ranking and getting shared long after it's published.",
      },
      {
        id: 'faq-3',
        question: 'What content marketing strategies actually work in 2026?',
        answer: 'The strategies holding up best right now combine strong SEO writing with real expertise and original data, since generic AI-written content is getting harder to stand out with on its own.',
      },
      {
        id: 'faq-4',
        question: 'How do I know if content marketing services are right for my business?',
        answer: "If your competitors are ranking for questions your customers are asking and you're not, that gap is usually the clearest sign it's time to invest in it.",
      },
      {
        id: 'faq-5',
        question: 'Can I do content marketing myself, or do I need content marketing services?',
        answer: "You can, especially early on. But once it needs to run consistently alongside everything else in the business, most owners find it's the first thing that slips — which is usually when it's worth handing off.",
      },
    ],
  },

  // ─── WHY CHOOSE ─────────────────────────────────────────────────────────────
  difference: {
    titleHtml: (
      <>Why Choose Our<br />Content Marketing Services</>
    ),
    subtitle: '',
    cards: [
      {
        id: 'd1',
        title: 'Proven Strategies',
        description: 'Content strategies built around what actually ranks and converts, not just what looks good on a calendar.',
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
      role: 'CEO, Tech Startup',
      text: '"Our blog used to sit untouched for months. Now there\'s an actual calendar, and traffic\'s grown every single month since."',
      image: 'https://ui-avatars.com/api/?name=Client+1&background=FF6A00&color=fff',
    },
    {
      id: 2,
      name: 'Placeholder Client 2',
      role: 'Founder, Local Business',
      text: '"Didn\'t expect a content audit to uncover this much — turns out half our old blogs weren\'t even targeting real keywords."',
      image: 'https://ui-avatars.com/api/?name=Client+2&background=FF6A00&color=fff',
    },
    {
      id: 3,
      name: 'Placeholder Client 3',
      role: 'Marketing Director',
      text: '"Clear content strategy, honest reporting, and steady organic growth every month since we started."',
      image: 'https://ui-avatars.com/api/?name=Client+3&background=FF6A00&color=fff',
    },
  ],
};
