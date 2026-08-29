import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { TrendingUp, DollarSign, Timer, User } from 'lucide-react';
import { SeoAuditHeroDashboard } from '@/components/sections/services/seo-audit/SeoAuditHeroDashboard';

export const seoAuditData: ServicePageData = {
  slug: 'seo-audit',

  // ─── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    badge: 'SEO AUDIT SERVICES',
    titleHtml: (
      <><span className="text-[#FF6A00]">SEO Audit</span> Services</>
    ),
    description:
      "A proper seo audit is the fastest way to find out why your rankings aren't moving and what to fix first. We dig through crawl data, content gaps, and technical errors so you walk away with a plan, not just a scorecard.",
    buttonText: 'Get a Free SEO Audit →',
    buttonLink: '/contact',
    rightComponent: <SeoAuditHeroDashboard />,
  },

  // ─── IMPORTANCE ─────────────────────────────────────────────────────────────
  importance: {
    titleHtml: (
      <><span className="text-[#FF6A00]">Website Audit Experts</span> in India</>
    ),
    heading: 'What Is a SEO Audit and Why It Matters',
    paragraphs: [
      "So, what is a seo audit exactly? It's a full walkthrough of your website: crawlability, site speed, on-page elements, backlinks, and content quality, all checked against what's actually working in search right now. Think of it as a diagnosis before treatment, not a generic report you skim once and forget.",
      "A lot of businesses run one seo audit and stop there. But the sites that keep climbing treat it as a recurring habit, not a one time report card sitting in a forgotten inbox.",
      "Running a seo audit for website health isn't optional once you're publishing content regularly. It's how you catch problems before they quietly cost you rankings for months.",
    ],
    imageSrc: '/images/services/seoaudit.webp', // Placeholder
    imageAlt: 'SEO Audit visualization',
    layoutVariant: 'wide-image',
  },

  // ─── STAT BAND ──────────────────────────────────────────────────────────────
  statBand: {
    badge: 'Why we focus on it',
    title: 'Why a Regular SEO Audit Keeps Your Rankings Stable',
    paragraphs: [
      'Search algorithms shift, competitors publish new pages, and old fixes quietly break as your site grows. Without a recurring check-in, you find out about problems only after traffic has already dropped.',
    ],
    statCards: [
      { value: '120+', label: 'Issues typically uncovered', highlightColor: '#FFF1E6' },
      { value: '45', label: 'Day avg. fix turnaround', highlightColor: '#FFF1E6' },
      { value: '3.2x', label: 'Traffic growth after fixes', highlightColor: '#FFF1E6' },
      { value: '94%', label: 'Client retention rate', highlightColor: '#FFF1E6' },
    ],
    quote:
      '"An audit only earns its cost if someone actually acts on it. That\'s the whole point of running one in the first place: turning a list of issues into a plan you can execute."',
  },

  // ─── TOOLS ──────────────────────────────────────────────────────────────────
  tools: {
    title: 'Tools We Use During The Audit',
    subtitle:
      "There's no single best seo audit tool that catches everything on its own. Screaming Frog, Ahrefs, and Search Console each flag different issues, which is exactly why we cross-check findings across all three before anything lands in your report.",
    tools: [
      { name: 'Screaming Frog', logo: '/images/tools/ahrefs-logo.webp' }, // Placeholder logos
      { name: 'Ahrefs', logo: '/images/tools/ahrefs-logo.webp' },
      { name: 'Search Console', logo: '/images/tools/pagespeed.webp' },
      { name: 'PageSpeed Insights', logo: '/images/tools/pagespeed.webp' },
      { name: 'SEMrush', logo: '/images/tools/Semrush.webp' },
      { name: 'GA4', logo: '/images/tools/chat-gpt.webp' },
    ],
  },

  // ─── IMPLEMENT ──────────────────────────────────────────────────────────────
  implement: {
    badge: 'What We Check',
    title: 'What Our SEO Audit Covers',
    description:
      "Every audit follows the same structured pass through your site, so nothing gets skipped just because it's less obvious than a broken link. Here's what that actually looks like, section by section.",
    items: [
      {
        id: '1',
        icon: '🔍',
        title: 'Crawl & Indexation Audit',
        description: "We check exactly what Google is crawling and indexing versus what you think it's crawling, and clear up the gap.",
      },
      {
        id: '2',
        icon: '⚡',
        title: 'Site Speed & Core Web Vitals Check',
        description: 'Load time, layout shift, and interactivity scores, measured on both mobile and desktop, not just one or the other.',
      },
      {
        id: '3',
        icon: '📄',
        title: 'On-Page SEO Review',
        description: 'Titles, meta descriptions, heading structure, and keyword placement checked page by page, not sampled at random.',
      },
      {
        id: '4',
        icon: '🔗',
        title: 'Backlink Profile Analysis',
        description: 'Which links are actually helping, which are dead weight, and whether anything toxic needs to be disavowed.',
      },
      {
        id: '5',
        icon: '🎯',
        title: 'Content Gap Analysis',
        description: "Topics your competitors rank for that you haven't touched yet, ranked by how realistic they are to win.",
      },
      {
        id: '6',
        icon: '⚠️',
        title: 'Technical Error Scan',
        description: 'Broken redirects, duplicate URLs, missing canonical tags, and anything else quietly working against you.',
      },
      {
        id: '7',
        icon: '📊',
        title: 'Competitor Benchmarking',
        description: 'Where you stand against the sites actually beating you, not a vague industry average that means nothing.',
      },
      {
        id: '8',
        icon: '📈',
        title: 'Keyword Ranking Review',
        description: 'Where you currently rank, where you used to rank, and what changed in between, tracked over time.',
      },
    ],
  },

  // ─── CHECKLIST ──────────────────────────────────────────────────────────────
  checklist: {
    title: 'Your Quick SEO Audit Checklist',
    descriptionHtml: (
      <>
        Want a rough idea of where your site stands before booking a full audit? Run through this list yourself first, most of it takes under twenty minutes.
      </>
    ),
    columns: ['Element', 'What to Check', 'Quick Tool'],
    rows: [
      { element: 'Site Speed', check: 'Loads under 3 seconds on mobile', tool: 'PageSpeed Insights' },
      { element: 'Indexed Pages', check: 'All key pages show up in Google', tool: 'Search Console' },
      { element: 'Broken Links', check: 'No 404s on important pages', tool: 'Screaming Frog' },
      { element: 'Meta Titles', check: 'Unique, under 60 characters', tool: 'Google SERP preview' },
      { element: 'Backlink Profile', check: 'No sudden toxic link spikes', tool: 'Ahrefs' },
      { element: 'Mobile Usability', check: 'No layout or tap-target issues', tool: 'Search Console' },
      { element: 'Duplicate Content', check: 'Canonical tags set correctly', tool: 'Screaming Frog' },
      { element: 'Keyword Rankings', check: 'No unexplained ranking drops', tool: 'SEMrush' },
    ],
    footerText:
      "Not in the mood for a manual pass? Fair enough, that's exactly why we exist. A handful of overlooked issues can be quietly costing you traffic right now without you knowing it.",
  },

  // ─── FAQ ────────────────────────────────────────────────────────────────────
  faq: {
    badge: 'FAQ',
    titleHtml: <>Frequently Asked Questions</>,
    items: [
      {
        id: 'faq-1',
        question: 'What is a SEO audit?',
        answer: "It's a structured review of your entire website, covering crawlability, site speed, on-page elements, backlinks, and content, so you know exactly what's helping your rankings and what's quietly holding them back.",
      },
      {
        id: 'faq-2',
        question: 'How often should I run a seo audit for website performance?',
        answer: "Once a quarter works for most sites. If you're publishing content weekly or making frequent site changes, a lighter monthly check catches problems before they compound into something bigger.",
      },
      {
        id: 'faq-3',
        question: "What's the best seo audit tool to use?",
        answer: "Honestly, there isn't one tool that does it all. We run Screaming Frog for crawl data, Ahrefs for backlinks, and Search Console for indexing, then cross-reference everything before drawing conclusions.",
      },
      {
        id: 'faq-4',
        question: 'How long does a full audit take to complete?',
        answer: "Most sites take five to seven business days, depending on how many pages we're working through and how deep the technical issues run.",
      },
    ],
  },

  // ─── WHY CHOOSE ─────────────────────────────────────────────────────────────
  difference: {
    titleHtml: (
      <>Why Choose Our<br />SEO Audit Services</>
    ),
    subtitle: "That's the standard we hold every seo audit for website engagement to: a plan you can act on, not a hundred-page PDF that sits in a folder.",
    cards: [
      {
        id: 'd1',
        title: 'Prioritized Findings',
        description: "Issues ranked by actual impact, so you fix what moves the needle first, not whatever's easiest.",
        icon: <TrendingUp className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd2',
        title: 'Transparent Pricing',
        description: "You'll know exactly what's included before we start. No vague line items, no surprise add-ons later.",
        icon: <DollarSign className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd3',
        title: 'Fast Turnaround',
        description: 'A full report within days, not weeks, without cutting corners on the actual checking.',
        icon: <Timer className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd4',
        title: 'Direct Access',
        description: 'Talk to the person who actually ran the audit, not an account manager reading a summary back to you.',
        icon: <User className="w-7 h-7" strokeWidth={2.5} />,
      },
    ],
  },

  // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: 'Placeholder Client 1',
      role: 'B2B Software Company',
      text: '"We had no idea half our pages weren\'t even indexed until this audit came back. Fixed within a month, traffic followed shortly after."',
      image: 'https://ui-avatars.com/api/?name=Client+1&background=FF6A00&color=fff',
    },
    {
      id: 2,
      name: 'Placeholder Client 2',
      role: 'Healthcare Clinic',
      text: '"The report was actually readable. No jargon, just a ranked list of what to fix first and why it mattered."',
      image: 'https://ui-avatars.com/api/?name=Client+2&background=FF6A00&color=fff',
    },
    {
      id: 3,
      name: 'Placeholder Client 3',
      role: 'Real Estate Firm',
      text: '"Two previous agencies gave us generic checklists. This was the first audit that actually explained the why behind every issue."',
      image: 'https://ui-avatars.com/api/?name=Client+3&background=FF6A00&color=fff',
    },
  ],
};
