import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { ShieldCheck, DollarSign, Zap, UserCheck } from 'lucide-react';
import { MetaAdsHeroDashboard } from '@/components/sections/services/meta-ads/MetaAdsHeroDashboard';

export const metaAdsData: ServicePageData = {
  slug: 'meta-ads',

  // ─── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    badge: 'META ADS',
    titleHtml: (
      <><span className="text-[#FF6A00]">Meta</span> Ads</>
    ),
    description:
      'We build and manage meta ads that actually convert, not just get seen. Targeting, creative, and budget handled by a team that lives inside Ads Manager every day, not once a month.',
    buttonText: 'Get a Free Account Audit →',
    buttonLink: '/contact',
    rightComponent: <MetaAdsHeroDashboard />,
  },

  // ─── IMPORTANCE ─────────────────────────────────────────────────────────────
  importance: {
    titleHtml: (
      <>What Is <span className="text-[#FF6A00]">Meta Advertising</span></>
    ),
    heading: 'Why Businesses Run Meta Ads',
    paragraphs: [
      `So, what is meta advertising exactly? It's the paid system behind Facebook and Instagram that lets you put your business directly in front of a specific audience, instead of hoping the algorithm decides to show your posts to people who already follow you.`,
      `If you're wondering what is meta ads in digital marketing more broadly, think of it as the piece that fills the gap organic posting can't. Organic content keeps existing followers engaged. Paid campaigns are how you actually reach new people who've never heard of your business.`,
      `That's why most businesses eventually bring in a meta ads agency instead of managing it alone. Between audience research, creative testing, and budget pacing, it adds up to more ongoing work than it looks like from the outside.`,
    ],
    imageSrc: '/images/services/Meta Ads.webp', // Placeholder
    imageAlt: 'Meta Ads structure visualization',
    layoutVariant: 'wide-image',
  },

  // ─── STAT BAND ──────────────────────────────────────────────────────────────
  statBand: {
    badge: 'Why we focus on it',
    title: 'Why Meta Ads Still Work in 2026',
    paragraphs: [
      'Feeds keep getting more crowded, but Facebook and Instagram still have some of the most detailed targeting options available anywhere. The platforms know an enormous amount about behavior and interests, and a well-run account puts that to work for you.',
    ],
    statCards: [
      { value: '3.1x', label: 'Avg. reach vs organic-only posts', highlightColor: '#FFF1E6' },
      { value: '+29%', label: 'Click-through rate improvement', highlightColor: '#FFF1E6' },
      { value: '4.3x', label: 'Average return on ad spend', highlightColor: '#FFF1E6' },
      { value: '94%', label: 'Client retention rate', highlightColor: '#FFF1E6' },
    ],
    quote:
      '"A campaign left untouched after launch is just a slower way of burning through budget."',
  },

  // ─── TOOLS ──────────────────────────────────────────────────────────────────
  tools: {
    title: 'Platforms & Tools We Use',
    subtitle: '',
    tools: [
      { name: 'Ads Manager', logo: <span className="font-bold text-[14px]">Ads Manager</span> },
      { name: 'Meta Business Suite', logo: <span className="font-bold text-[14px]">Meta Business Suite</span> },
      { name: 'Meta Pixel', logo: <span className="font-bold text-[14px]">Meta Pixel</span> },
      { name: 'Canva', logo: <span className="font-bold text-[14px]">Canva</span> },
      { name: 'GA4', logo: <span className="font-bold text-[14px]">GA4</span> },
      { name: 'Looker Studio', logo: <span className="font-bold text-[14px]">Looker Studio</span> },
    ],
  },

  // ─── IMPLEMENT ──────────────────────────────────────────────────────────────
  implement: {
    badge: 'What we do',
    title: 'What We Implement in Our Meta Ads Campaigns',
    description:
      "Running ads well is more than boosting a post and hoping for the best. Here's what our meta ads services actually include, campaign by campaign.",
    items: [
      {
        id: '1',
        icon: '🎯',
        title: 'Audience Research & Targeting',
        description:
          'Finding the people actually likely to buy, based on behavior and interests, not a generic age-and-location guess.',
      },
      {
        id: '2',
        icon: '🖌️',
        title: 'Ad Creative & Copywriting',
        description:
          'Scroll-stopping visuals and copy written for the platform, since what works on Instagram usually flops elsewhere.',
      },
      {
        id: '3',
        icon: '⚙️',
        title: 'Campaign Setup & Structure',
        description:
          "Built around your actual goal, whether that's leads, sales, or getting the brand in front of more people.",
      },
      {
        id: '4',
        icon: '🔄',
        title: 'Retargeting Campaigns',
        description:
          "Bringing back people who visited but didn't buy, usually at a fraction of the cost of a fresh click.",
      },
      {
        id: '5',
        icon: '⚖️',
        title: 'A/B Testing',
        description:
          'Running variations side by side instead of guessing which headline or image performs better.',
      },
      {
        id: '6',
        icon: '💸',
        title: 'Budget Optimization',
        description:
          "Spend weighted toward what's actually converting, adjusted as the data comes in rather than left alone for a month.",
      },
      {
        id: '7',
        icon: '📡',
        title: 'Pixel & Conversion Tracking',
        description:
          'Installed and firing correctly, so you know exactly which campaigns are driving real results, not just clicks.',
      },
      {
        id: '8',
        icon: '📈',
        title: 'Reporting & Optimization',
        description:
          "Our team holds active meta ads certification, so campaign decisions follow Meta's own current best practices, not outdated guesswork.",
      },
    ],
  },

  // ─── CHECKLIST ──────────────────────────────────────────────────────────────
  checklist: {
    title: 'Your Quick Ad Account Checklist',
    descriptionHtml: (
      <>
        Curious how your current setup actually stacks up? Run through this list yourself first. Most of it takes fifteen minutes.
      </>
    ),
    columns: ['Element', 'What to Check', 'Quick Tool'],
    rows: [
      { element: 'Pixel Installation', check: 'Firing correctly on key pages and events', tool: 'Meta Pixel Helper' },
      { element: 'Ad Account Structure', check: 'Campaigns organized by goal, not thrown together', tool: 'Ads Manager' },
      { element: 'Audience Overlap', check: "Campaigns aren't competing against each other", tool: 'Ads Manager' },
      { element: 'Creative Freshness', check: 'Visuals rotated regularly, not reused for months', tool: 'Manual review' },
      { element: 'Ad Frequency', check: "Not so high it's annoying the same people repeatedly", tool: 'Ads Manager' },
      { element: 'Landing Page Match', check: 'Ad promise matches what the page actually offers', tool: 'Manual audit' },
      { element: 'Budget Pacing', check: "Spend isn't running out mid-day or sitting unused", tool: 'Ads Manager' },
      { element: 'Reporting Cadence', check: 'Reviewed weekly, not once a quarter', tool: 'Looker Studio' },
    ],
    footerText:
      "Not in the mood for a manual audit? Fair enough. That's exactly what meta ads are for. A few small fixes can be quietly wasting your budget right now.",
  },

  // ─── FAQ ────────────────────────────────────────────────────────────────────
  faq: {
    badge: 'FAQ',
    titleHtml: <>Frequently Asked <span className="text-[#FF6A00]">Ad Account Questions</span></>,
    items: [
      {
        id: 'faq-1',
        question: 'What is meta advertising?',
        answer:
          "It's the paid advertising system that runs across Facebook, Instagram, and Messenger, letting businesses target specific audiences instead of relying on organic reach alone.",
      },
      {
        id: 'faq-2',
        question: 'What is meta ads in digital marketing exactly?',
        answer:
          "It's one channel within a bigger marketing mix, usually working alongside SEO, email, and search ads. It tends to be strongest for awareness and for reaching people who don't yet know your brand.",
      },
      {
        id: 'faq-3',
        question: 'Do you have meta ads certification?',
        answer:
          "Yes, our team holds current Meta certifications and stays on top of platform changes, since targeting options and ad formats shift more often than most business owners have time to track.",
      },
      {
        id: 'faq-4',
        question: "What's included in your meta ads services?",
        answer:
          "Strategy, audience research, ad creative, campaign setup, ongoing optimization, and reporting. Everything from the first draft of the ad to the weekly numbers review.",
      },
      {
        id: 'faq-5',
        question: 'Should I hire a meta ads agency or run campaigns myself?',
        answer:
          "You can absolutely manage the basics yourself early on. Once budgets grow and targeting gets more complex, most owners find bringing in outside help pays for itself in time saved and mistakes avoided.",
      },
    ],
  },

  // ─── WHY CHOOSE ─────────────────────────────────────────────────────────────
  difference: {
    titleHtml: (
      <>Why Choose Us for <span className="text-[#FF6A00]">Meta Ads</span></>
    ),
    subtitle: '',
    cards: [
      {
        id: 'd1',
        title: 'Certified Expertise',
        description: "Meta ads certification and hands-on daily account management, not a course badge that's never applied.",
        icon: <ShieldCheck className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd2',
        title: 'Transparent Pricing',
        description: "You'll know exactly what you're paying for. No vague line items or surprise add-ons later.",
        icon: <DollarSign className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd3',
        title: 'Fast Launch',
        description: "Campaigns go live quickly once strategy and creative are approved, without cutting corners.",
        icon: <Zap className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd4',
        title: 'Direct Access',
        description: "Unlike a large meta ads agency juggling hundreds of accounts, you get the person actually managing your campaigns.",
        icon: <UserCheck className="w-7 h-7" strokeWidth={2.5} />,
      },
    ],
  },

  // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: 'Placeholder Client 1',
      role: 'D2C Skincare Brand',
      text: '"Our first campaign paid for itself within two weeks. We didn\'t expect results that fast."',
      image: 'https://ui-avatars.com/api/?name=Client+1&background=FF6A00&color=fff',
    },
    {
      id: 2,
      name: 'Placeholder Client 2',
      role: 'Furniture Retailer',
      text: '"The retargeting setup alone brought back customers we\'d basically written off."',
      image: 'https://ui-avatars.com/api/?name=Client+2&background=FF6A00&color=fff',
    },
    {
      id: 3,
      name: 'Placeholder Client 3',
      role: 'B2B SaaS Company',
      text: '"Clear weekly reports, no jargon, and a genuinely lower cost per lead than our last agency."',
      image: 'https://ui-avatars.com/api/?name=Client+3&background=FF6A00&color=fff',
    },
  ],
};
