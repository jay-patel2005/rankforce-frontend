import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { SocialMediaMarketingHeroDashboard } from '@/components/sections/services/social-media-marketing/SocialMediaMarketingHeroDashboard';
import { 
  CalendarDays, 
  Megaphone, 
  Users, 
  UserPlus, 
  BarChart2, 
  PenTool, 
  Layout, 
  TrendingUp,
  Target,
  DollarSign,
  Zap,
  UserCheck
} from 'lucide-react';

export const socialMediaMarketingData: ServicePageData = {
  slug: 'social-media-marketing',

  hero: {
    badge: 'SOCIAL MEDIA MARKETING',
    titleHtml: (
      <><span className="text-[#FF6A00]">Social Media Marketing</span> Services</>
    ),
    description:
      "A strong social media marketing plan turns scrolling into actual sales, not just likes and comments that go nowhere. We build the content calendar, run the ads, and report on what's actually moving your business forward.",
    buttonText: 'Get a Free Social Media Audit →',
    buttonLink: '/contact',
    rightComponent: <SocialMediaMarketingHeroDashboard />,
  },

  importance: {
    titleHtml: (
      <><span className="text-[#FF6A00]">Digital Marketing Experts</span> in India</>
    ),
    heading: 'What Are Social Media Marketing and Why It Matters to Your Brand',
    paragraphs: [
      "So, what are social media marketing efforts actually supposed to do for a business? It's more than posting daily. It's using platforms like Instagram, Facebook, and LinkedIn to build an audience, drive traffic, and turn followers into paying customers.",
      "A lot of brands treat it like a checkbox: post something, anything, and move on. That's not a strategy, that's just noise, and noise doesn't convert.",
      "Real social media marketing works because it's consistent, targeted, and tied to an actual goal, not whatever trend happens to be popular that week."
    ],
    imageSrc: '/images/services/socialmediamarketing.webp', // Can use existing placeholder image
    imageAlt: 'Social Ads visualization',
    layoutVariant: 'wide-image',
  },

  statBand: {
    badge: 'Why we focus on it',
    title: 'Social Media Marketing Benefits That Actually Move the Needle',
    paragraphs: [
      "Ads get more expensive every quarter, and organic reach keeps shrinking on every platform. What still works is a presence people trust enough to buy from, and that's built one post, one comment, one DM at a time."
    ],
    statCards: [
      { value: '+65%', label: 'Avg. engagement growth', highlightColor: '#FFF1E6' },
      { value: '3.4x', label: 'Follower growth in 90 days', highlightColor: '#FFF1E6' },
      { value: '28%', label: 'Avg. lead increase', highlightColor: '#FFF1E6' },
      { value: '95%', label: 'Client retention rate', highlightColor: '#FFF1E6' },
    ],
    quote: "The real social media marketing benefits show up months after the campaign starts, not during the first week. That's the part most business owners underestimate."
  },

  tools: {
    title: 'TOOLS WE USE',
    subtitle: 'Expertise across the major social networks and analytics platforms.',
    tools: [
      { name: 'Meta Business Suite', logo: <span className="font-bold text-[14px]">Meta</span> },
      { name: 'Hootsuite', logo: <span className="font-bold text-[14px]">Hootsuite</span> },
      { name: 'Canva', logo: <span className="font-bold text-[14px]">Canva</span> },
      { name: 'Sprout Social', logo: <span className="font-bold text-[14px]">Sprout</span> },
      { name: 'Google Analytics', logo: <span className="font-bold text-[14px]">Analytics</span> },
      { name: 'Later', logo: <span className="font-bold text-[14px]">Later</span> },
    ],
  },

  implement: {
    badge: 'What we do',
    title: 'What Our Social Media Marketing Services Include',
    description:
      "Running social media well takes more moving parts than most people expect: strategy, content, ads, and reporting, all working together instead of sitting in separate silos. Here's what that looks like for your brand.",
    items: [
      {
        id: 'content-strategy',
        title: 'Content Strategy & Calendar',
        description: 'A posting plan built around your actual goals, not just filling a calendar with generic content.',
        icon: <CalendarDays size={20} strokeWidth={2.5} />,
      },
      {
        id: 'paid-social',
        title: 'Paid Social Advertising',
        description: 'Targeted campaigns on Meta, Instagram, and LinkedIn that reach people actually likely to buy from you.',
        icon: <Megaphone size={20} strokeWidth={2.5} />,
      },
      {
        id: 'community-management',
        title: 'Community Management',
        description: "Comments, DMs, and mentions handled daily, not answered three days late once the moment's already passed.",
        icon: <Users size={20} strokeWidth={2.5} />,
      },
      {
        id: 'influencer',
        title: 'Influencer & Creator Partnerships',
        description: 'Matching your brand with creators whose audience actually overlaps with yours, not just anyone with a large following.',
        icon: <UserPlus size={20} strokeWidth={2.5} />,
      },
      {
        id: 'analytics',
        title: 'Analytics & Performance Reporting',
        description: 'Clear monthly reports showing what worked, what didn\'t, and what we\'re adjusting next.',
        icon: <BarChart2 size={20} strokeWidth={2.5} />,
      },
      {
        id: 'brand-voice',
        title: 'Brand Voice & Creative Direction',
        description: "A consistent tone and visual style across every platform, so your brand feels like one thing, not five.",
        icon: <PenTool size={20} strokeWidth={2.5} />,
      },
      {
        id: 'platform-strategy',
        title: 'Platform-Specific Strategy',
        description: "What works on Instagram doesn't automatically work on LinkedIn, so each platform gets its own approach.",
        icon: <Layout size={20} strokeWidth={2.5} />,
      },
      {
        id: 'growth-campaigns',
        title: 'Engagement & Growth Campaigns',
        description: "Contests, collaborations, and campaigns designed to grow your following with people who'll actually engage.",
        icon: <TrendingUp size={20} strokeWidth={2.5} />,
      },
    ],
  },

  checklist: {
    title: 'Your Quick Social Media Marketing Checklist',
    descriptionHtml: (
      <>Want to know where your social presence actually stands before spending on ads? Run through this list yourself first, most of it takes fifteen minutes.</>
    ),
    columns: ['Element', 'What to Check', 'Quick Tool'],
    rows: [
      { element: 'Posting Consistency', check: '3-4 posts per week per platform', tool: 'Native scheduler' },
      { element: 'Bio & Profile', check: 'Clear, on-brand, with a working link', tool: 'Manual check' },
      { element: 'Engagement Rate', check: 'Comments and likes relative to followers', tool: 'Native insights' },
      { element: 'Content Mix', check: 'A mix of reels, static posts, and stories', tool: 'Manual audit' },
      { element: 'Hashtag Usage', check: 'Relevant, not generic or overused', tool: 'Native insights' },
      { element: 'Ad Account Setup', check: 'Pixel installed, ads tracking correctly', tool: 'Meta Business Suite' },
      { element: 'Response Time', check: 'DMs and comments answered within a day', tool: 'Manual check' },
      { element: 'Analytics Tracking', check: 'UTM links used on all bio/post links', tool: 'Google Analytics' },
    ],
    footerText: "Not in the mood to dig through analytics yourself? Fair enough, that's exactly why we exist. A few missed basics can be quietly costing you followers and sales.",
  },

  faq: {
    badge: 'FAQ',
    titleHtml: <>Frequently Asked <span className="text-[#FF6A00]">Questions</span></>,
    items: [
      {
        id: 'faq-1',
        question: "What's included in social media marketing services?",
        answer: "It's the full package: strategy, content creation, posting, paid ads, and reporting, all handled so your brand shows up consistently instead of in random bursts."
      },
      {
        id: 'faq-2',
        question: "What are social media marketing goals I should actually track?",
        answer: "Engagement rate, follower growth, click-through to your site, and actual conversions matter far more than vanity metrics like total likes."
      },
      {
        id: 'faq-3',
        question: "Should I hire a social media marketing agency or handle it in-house?",
        answer: "Depends on your bandwidth. A social media marketing agency makes sense once posting consistently, running ads, and tracking results starts eating more hours than your team actually has."
      },
      {
        id: 'faq-4',
        question: "What social media marketing benefits show up first?",
        answer: "Usually engagement and brand awareness within the first month, with actual sales and leads following over two to three months as trust builds."
      }
    ],
  },

  difference: {
    titleHtml: (
      <>Why Choose Our <span className="text-[#FF6A00]">Social Media Marketing Agency</span></>
    ),
    subtitle: "We're not an agency that disappears after the strategy call. We're in your inbox weekly with what's working and what we're changing next.",
    cards: [
      {
        id: 'diff-1',
        title: 'Proven Campaigns',
        description: "Built on strategies that have actually grown other brands, not guesswork on your account.",
        icon: <Target className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'diff-2',
        title: 'Transparent Reporting',
        description: "You'll see real numbers every month, not a highlight reel of your best-performing post.",
        icon: <DollarSign className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'diff-3',
        title: 'Fast Turnaround',
        description: "Content calendars and ad campaigns go live within days, not weeks of back and forth.",
        icon: <Zap className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'diff-4',
        title: 'Direct Access',
        description: "Talk to the person actually running your accounts, not an account manager relaying updates.",
        icon: <UserCheck className="w-7 h-7" strokeWidth={2.5} />,
      }
    ]
  },

  testimonials: [
    {
      id: 1,
      name: 'Placeholder Client 1',
      role: 'Fashion Brand',
      text: "\"Our Instagram was basically dead before this. Now it's actually driving DMs that turn into sales every week.\"",
      image: '/images/testimonials/avatar-1.jpg',
    },
    {
      id: 2,
      name: 'Placeholder Client 2',
      role: 'Restaurant Chain',
      text: "\"They took over our accounts and within two months our engagement doubled. Wish we'd started sooner.\"",
      image: '/images/testimonials/avatar-2.jpg',
    },
    {
      id: 3,
      name: 'Placeholder Client 3',
      role: 'Fitness Studio',
      text: "\"Best decision we made this year. The reporting alone showed us where our ad budget was actually going.\"",
      image: '/images/testimonials/avatar-3.jpg',
    },
  ],
};
