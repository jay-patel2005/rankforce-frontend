import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { SocialMediaMarketingHeroDashboard } from '@/components/sections/services/social-media-marketing/SocialMediaMarketingHeroDashboard';
import { 
  Target, 
  PenTool, 
  Share2, 
  Briefcase, 
  RefreshCcw, 
  LayoutTemplate, 
  SplitSquareHorizontal, 
  BarChart2,
  Globe,
  TrendingUp,
  Zap,
  UserCheck
} from 'lucide-react';

export const socialMediaMarketingData: ServicePageData = {
  slug: 'social-media-marketing',

  hero: {
    badge: 'SOCIAL MEDIA MARKETING',
    titleHtml: (
      <><span className="text-[#FF6A00]">Social Media Ads</span> Packages</>
    ),
    description:
      "Organic posting alone rarely moves the needle anymore. We build, launch, and manage ad campaigns across the platforms your customers actually spend time on, so growth stops depending on the algorithm's mood.",
    buttonText: 'Get a Free Ads Audit →',
    buttonLink: '/contact',
    rightComponent: <SocialMediaMarketingHeroDashboard />,
  },

  importance: {
    titleHtml: (
      <><span className="text-[#FF6A00]">Social Media Ads</span> Services</>
    ),
    heading: 'Why Social Media Ads Work for Growing Businesses',
    paragraphs: [
      "Organic posts are great for staying visible with people who already follow you, but they rarely reach anyone new. One of the clearest benefits of social media ads is that they put your business in front of people who've never heard of you yet, right on the platforms where they're already scrolling.",
      "The importance of social media ads shows up fastest for businesses that are new, local, or launching something. Waiting for organic reach to build on its own can take months you might not have, and the algorithm doesn't really care about your timeline.",
      "That's really what social media ads packages are for. Bundling strategy, creative, targeting, and reporting into one place so you're not juggling five different tools and guessing at the rest."
    ],
    imageSrc: '/images/services/socialmedia.webp', // Can use existing placeholder image or custom svg if needed
    imageAlt: 'Social Media Ads visualization',
    layoutVariant: 'wide-image',
  },

  statBand: {
    badge: 'Why we focus on it',
    title: 'Importance of Social Media Ads in 2026',
    paragraphs: [
      "Feeds keep getting more crowded, and organic reach keeps shrinking whether we like it or not. Paid placement is the fastest way left to guarantee your business actually gets seen by the people it's meant for."
    ],
    statCards: [
      { value: '3.2x', label: 'Avg. reach vs organic-only posts', highlightColor: '#FFF1E6' },
      { value: '+27%', label: 'Click-through rate improvement', highlightColor: '#FFF1E6' },
      { value: '4.1x', label: 'Average return on ad spend', highlightColor: '#FFF1E6' },
      { value: '94%', label: 'Client retention rate', highlightColor: '#FFF1E6' },
    ],
    quote: "An ad campaign isn't a one-off boost — it's an ongoing system that keeps bringing the right people to your business."
  },

  tools: {
    title: 'PLATFORMS & TOOLS WE USE',
    subtitle: 'Expertise across the major ad networks and analytics platforms.',
    tools: [
      { name: 'Meta Ads Manager', logo: <span className="font-bold text-[14px]">Meta</span> },
      { name: 'Google Ads', logo: <span className="font-bold text-[14px]">Google</span> },
      { name: 'LinkedIn Campaign Manager', logo: <span className="font-bold text-[14px]">LinkedIn</span> },
      { name: 'TikTok Ads', logo: <span className="font-bold text-[14px]">TikTok</span> },
      { name: 'Canva', logo: <span className="font-bold text-[14px]">Canva</span> },
      { name: 'GA4', logo: <span className="font-bold text-[14px]">GA4</span> },
    ],
  },

  implement: {
    badge: 'What we do',
    title: 'What We Implement in Our Social Media Ads Strategy',
    description:
      "Running ads well isn't just boosting a post and hoping for the best. Here's what our social media ads services actually include, campaign by campaign.",
    items: [
      {
        id: 'audience-research',
        title: 'Audience Research & Targeting',
        description: 'Finding the people actually likely to buy, based on behavior and interests, not a generic age-and-location guess.',
        icon: <Target size={20} strokeWidth={2.5} />,
      },
      {
        id: 'ad-creative',
        title: 'Ad Creative & Copywriting',
        description: 'Scroll-stopping visuals and copy written for the platform, because what works on Instagram usually flops on LinkedIn.',
        icon: <PenTool size={20} strokeWidth={2.5} />,
      },
      {
        id: 'fb-ig-ads',
        title: 'Facebook & Instagram Ads',
        description: "Campaign structures built around your actual goal, whether that's leads, sales, or simply getting the brand in front of more people.",
        icon: <Share2 size={20} strokeWidth={2.5} />,
      },
      {
        id: 'linkedin-ads',
        title: 'LinkedIn & B2B Ads',
        description: 'For businesses selling to other businesses, where the targeting and the tone both need to be different from consumer campaigns.',
        icon: <Briefcase size={20} strokeWidth={2.5} />,
      },
      {
        id: 'retargeting',
        title: 'Retargeting Campaigns',
        description: "Bringing back people who visited but didn't buy is one of the biggest benefits of social media ads over organic-only posting, and it's usually the cheapest conversion you'll get.",
        icon: <RefreshCcw size={20} strokeWidth={2.5} />,
      },
      {
        id: 'landing-page',
        title: 'Landing Page Alignment',
        description: 'The page someone lands on after clicking your ad matters as much as the ad itself. We check the two actually match up.',
        icon: <LayoutTemplate size={20} strokeWidth={2.5} />,
      },
      {
        id: 'ab-testing',
        title: 'A/B Testing',
        description: 'Running variations side by side instead of guessing which headline or image performs better.',
        icon: <SplitSquareHorizontal size={20} strokeWidth={2.5} />,
      },
      {
        id: 'reporting',
        title: 'Reporting & Optimization',
        description: "Clear numbers on what's working and what's not, with campaigns adjusted weekly rather than left to run on autopilot.",
        icon: <BarChart2 size={20} strokeWidth={2.5} />,
      },
    ],
  },

  checklist: {
    title: 'Your Quick Ad Campaign Checklist',
    descriptionHtml: (
      <>Curious how your current setup stacks up before spending anything? Run through this list yourself first. Most of it takes fifteen minutes.</>
    ),
    columns: ['Element', 'What to Check', 'Quick Tool'],
    rows: [
      { element: 'Ad Account Structure', check: 'Campaigns organized by goal, not thrown together', tool: 'Meta Ads Manager' },
      { element: 'Pixel & Tracking', check: 'Installed and firing correctly on key pages', tool: 'Meta Pixel Helper' },
      { element: 'Ad Creative', check: 'Fresh visuals, not the same image reused for months', tool: 'Manual review' },
      { element: 'Audience Overlap', check: "Campaigns aren't competing against each other", tool: 'Meta Ads Manager' },
      { element: 'Landing Page Match', check: 'Ad promise matches what the page actually offers', tool: 'Manual audit' },
      { element: 'Budget Allocation', check: "Spend weighted toward what's actually converting", tool: 'GA4' },
      { element: 'Ad Frequency', check: "Not so high it's annoying the same people repeatedly", tool: 'Meta Ads Manager' },
      { element: 'Reporting Cadence', check: 'Reviewed weekly, not once a quarter', tool: 'GA4' },
    ],
    footerText: "Not in the mood for a manual audit? Fair enough. That's exactly what social media ads are for. A few small fixes can be quietly wasting your budget right now.",
  },

  faq: {
    badge: 'FAQ',
    titleHtml: <>Frequently Asked <span className="text-[#FF6A00]">Ad Campaign Questions</span></>,
    items: [
      {
        id: 'faq-1',
        question: 'What are social media ads?',
        answer: "They're paid campaigns run on platforms like Facebook, Instagram, LinkedIn, and YouTube that put your business in front of a specific, chosen audience instead of relying on the algorithm to show your posts to your existing followers."
      },
      {
        id: 'faq-2',
        question: "What's included in your social media ads services?",
        answer: "Strategy, audience research, ad creative, campaign setup, ongoing optimization, and reporting. Everything from the first draft of the ad to the weekly numbers review."
      },
      {
        id: 'faq-3',
        question: "What are the real benefits of social media ads for a small business?",
        answer: "Mainly speed and control. You reach new people faster than organic growth allows, and you can target exactly who sees the ad instead of hoping the right person scrolls past your page."
      },
      {
        id: 'faq-4',
        question: "What's the importance of social media ads compared to organic social posts?",
        answer: "Organic posts keep existing followers engaged, but reach for new audiences has dropped sharply on most platforms. Ads are how you get in front of people who don't already know you exist."
      },
      {
        id: 'faq-5',
        question: "How long before a campaign starts producing results?",
        answer: "Most accounts start showing usable data within the first one to two weeks. Meaningful optimization and stronger returns usually kick in around the one-month mark, once there's enough data to work with."
      }
    ],
  },

  difference: {
    titleHtml: (
      <>Why Choose Us for <span className="text-[#FF6A00]">Social Media Ads</span></>
    ),
    subtitle: "We focus on real returns, not vanity metrics.",
    cards: [
      {
        id: 'diff-1',
        title: 'Platform Expertise',
        description: "We know how each platform's ad system actually behaves, not just the theory from a course.",
        icon: <Globe className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'diff-2',
        title: 'Transparent Reporting',
        description: "You'll see exactly where the budget went and what it produced. No vague monthly summary PDFs.",
        icon: <TrendingUp className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'diff-3',
        title: 'Fast Launch',
        description: "Campaigns go live quickly once strategy and creative are approved, without cutting corners.",
        icon: <Zap className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'diff-4',
        title: 'Direct Access',
        description: "Talk to the person actually managing your campaigns, not an account manager relaying updates.",
        icon: <UserCheck className="w-7 h-7" strokeWidth={2.5} />,
      }
    ]
  },

  testimonials: [
    {
      id: 1,
      name: 'Placeholder Client 1',
      role: 'D2C Skincare Brand',
      text: "Our first campaign paid for itself within two weeks. We didn't expect results that fast.",
      image: '/images/testimonials/avatar-1.jpg',
    },
    {
      id: 2,
      name: 'Placeholder Client 2',
      role: 'Furniture Retailer',
      text: "The retargeting setup alone brought back customers we'd basically written off.",
      image: '/images/testimonials/avatar-2.jpg',
    },
    {
      id: 3,
      name: 'Placeholder Client 3',
      role: 'B2B SaaS Company',
      text: "Clear weekly reports, no jargon, and a genuinely lower cost per lead than our last agency.",
      image: '/images/testimonials/avatar-3.jpg',
    },
  ],
};
