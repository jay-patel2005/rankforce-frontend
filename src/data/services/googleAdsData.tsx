import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { GoogleAdsHeroDashboard } from '@/components/sections/services/google-ads/GoogleAdsHeroDashboard';
import { 
  Target, 
  Search, 
  PenTool, 
  LayoutTemplate, 
  ShoppingCart, 
  RefreshCcw, 
  TrendingUp, 
  BarChart2,
  MapPin,
  DollarSign,
  Zap,
  UserCheck
} from 'lucide-react';

export const googleAdsData: ServicePageData = {
  slug: 'google-ads',

  hero: {
    badge: 'GOOGLE ADS',
    titleHtml: (
      <><span className="text-[#FF6A00]">Google Ads</span> Agency</>
    ),
    description:
      "A campaign that looks fine on paper can still burn through budget with nothing to show for it. We build, launch, and manage search, shopping, and remarketing campaigns around what actually turns into a lead or a sale.",
    buttonText: 'Get a Free Account Audit →',
    buttonLink: '/contact',
    rightComponent: <GoogleAdsHeroDashboard />,
  },

  importance: {
    titleHtml: (
      <><span className="text-[#FF6A00]">Google Ads Expert</span> in India</>
    ),
    heading: 'Why Businesses Hire a Google Ads Agency',
    paragraphs: [
      "There's more than one way to show up on Google, and knowing the different google ads types is really just the starting point. Search ads catch people mid-decision, shopping ads put your product photo right next to the price, and display or video campaigns build awareness before someone's even ready to buy.",
      "Figuring out how to run google ads properly means getting the account structure, bidding strategy, and targeting right before a single rupee is spent. Get any one of those wrong, and the budget disappears without much to show for it.",
      "That's exactly what a proper google ads agency handles for you. Not just setting up a campaign and walking away, but watching it, adjusting it, and making sure the spend keeps working as hard as it should."
    ],
    imageSrc: '/images/services/Google Ads.webp', // Can use existing placeholder image
    imageAlt: 'Google Ads visualization',
    layoutVariant: 'wide-image',
    imageClassName: 'w-full max-w-[500px] lg:max-w-[600px] h-[350px] lg:h-[500px] object-contain',
  },

  statBand: {
    badge: 'Why we focus on it',
    title: 'Why Work With a Google Ads Agency in 2026',
    paragraphs: [
      "Auction costs keep climbing, and Google's own automated bidding tools reward accounts that are actually managed, not left to run on default settings. The gap between a well-run account and a neglected one shows up directly in your cost per lead."
    ],
    statCards: [
      { value: '-22%', label: 'Avg. cost per lead reduction', highlightColor: '#FFF1E6' },
      { value: '3.8x', label: 'Average return on ad spend', highlightColor: '#FFF1E6' },
      { value: '+31%', label: 'Click-through rate improvement', highlightColor: '#FFF1E6' },
      { value: '93%', label: 'Client retention rate', highlightColor: '#FFF1E6' },
    ],
    quote: "A campaign left on autopilot is just a slower way of losing budget."
  },

  tools: {
    title: 'TOOLS WE USE',
    subtitle: 'Expertise across the major ad networks and analytics platforms.',
    tools: [
      { name: 'Google Ads Manager', logo: <span className="font-bold text-[14px]">Ads Manager</span> },
      { name: 'Google Analytics 4', logo: <span className="font-bold text-[14px]">GA4</span> },
      { name: 'Google Tag Manager', logo: <span className="font-bold text-[14px]">GTM</span> },
      { name: 'Merchant Center', logo: <span className="font-bold text-[14px]">Merchant Center</span> },
      { name: 'SEMrush', logo: <span className="font-bold text-[14px]">SEMrush</span> },
      { name: 'Looker Studio', logo: <span className="font-bold text-[14px]">Looker</span> },
    ],
  },

  implement: {
    badge: 'What we do',
    title: 'What We Implement as Your Google Ads Agency',
    description:
      "Running an account well means more than picking keywords and setting a budget. We manage every one of the google ads types that makes sense for your business, not just the easiest one to set up.",
    items: [
      {
        id: 'campaign-strategy',
        title: 'Campaign Strategy & Account Structure',
        description: 'Campaigns organized around your actual goals, not one giant catch-all group that makes optimizing anything nearly impossible.',
        icon: <Target size={20} strokeWidth={2.5} />,
      },
      {
        id: 'keyword-research',
        title: 'Keyword Research & Negative Keywords',
        description: 'Finding the searches worth bidding on, and just as importantly, blocking the ones that only waste your budget.',
        icon: <Search size={20} strokeWidth={2.5} />,
      },
      {
        id: 'ad-copy',
        title: 'Ad Copy & Extensions',
        description: 'Written to actually get the click, with sitelinks, callouts, and structured snippets that fill more of the results page.',
        icon: <PenTool size={20} strokeWidth={2.5} />,
      },
      {
        id: 'landing-page',
        title: 'Landing Page Alignment',
        description: 'The page someone lands on after the click matters as much as the ad. We make sure the two actually match.',
        icon: <LayoutTemplate size={20} strokeWidth={2.5} />,
      },
      {
        id: 'shopping-pmax',
        title: 'Shopping & Performance Max Campaigns',
        description: 'Product feed cleanup and campaign setup for stores that need their catalog actually showing up in search.',
        icon: <ShoppingCart size={20} strokeWidth={2.5} />,
      },
      {
        id: 'remarketing',
        title: 'Remarketing Campaigns',
        description: "Bringing back visitors who didn't convert the first time, usually at a fraction of the cost of a fresh click.",
        icon: <RefreshCcw size={20} strokeWidth={2.5} />,
      },
      {
        id: 'bid-strategy',
        title: 'Bid Strategy & Budget Management',
        description: "Manual adjustments where automation falls short, so spend goes toward what's actually converting.",
        icon: <TrendingUp size={20} strokeWidth={2.5} />,
      },
      {
        id: 'reporting',
        title: 'Reporting & Conversion Tracking',
        description: 'Clear numbers on cost per lead and return on spend, checked weekly instead of left to a monthly surprise.',
        icon: <BarChart2 size={20} strokeWidth={2.5} />,
      },
    ],
  },

  checklist: {
    title: 'Your Quick Account Checklist',
    descriptionHtml: (
      <>Curious how your current account actually stacks up? Run through this list yourself first. Most of it takes fifteen minutes.</>
    ),
    columns: ['Element', 'What to Check', 'Quick Tool'],
    rows: [
      { element: 'Conversion Tracking', check: 'Set up correctly and firing on the right actions', tool: 'Google Tag Manager' },
      { element: 'Negative Keywords', check: 'Irrelevant searches blocked from triggering ads', tool: 'Search Terms Report' },
      { element: 'Ad Extensions', check: 'Sitelinks, callouts, and structured snippets active', tool: 'Google Ads Manager' },
      { element: 'Quality Score', check: 'Above 6 on your main keywords', tool: 'Google Ads Manager' },
      { element: 'Landing Page Match', check: 'Ad promise matches the page it points to', tool: 'Manual audit' },
      { element: 'Budget Pacing', check: "Spend isn't running out mid-day or sitting unused", tool: 'Google Ads Manager' },
      { element: 'Device & Location Bids', check: 'Adjusted based on where conversions actually happen', tool: 'GA4' },
      { element: 'Reporting Cadence', check: 'Reviewed weekly, not once a quarter', tool: 'Looker Studio' },
    ],
    footerText: "Not in the mood for a manual audit? Fair enough. That's exactly what a google ads agency is for. A few small fixes can be quietly wasting your budget right now.",
  },

  faq: {
    badge: 'FAQ',
    titleHtml: <>Frequently Asked <span className="text-[#FF6A00]">Account Questions</span></>,
    items: [
      {
        id: 'faq-1',
        question: 'How to run google ads without wasting your budget?',
        answer: "Start with tight keyword targeting, strong negative keywords, and a landing page that actually matches the ad. Most wasted budget comes from broad targeting and pages that don't deliver on what the ad promised."
      },
      {
        id: 'faq-2',
        question: "Can I still access my google ads account directly?",
        answer: "Yes, always. You keep full ownership and admin access to my google ads dashboard at every stage. We manage it, but the account and the data stay yours."
      },
      {
        id: 'faq-3',
        question: "What are the different google ads types you manage?",
        answer: "Search, shopping, display, video, and remarketing campaigns. Which ones make sense depends on your goals, budget, and whether you're selling products or services."
      },
      {
        id: 'faq-4',
        question: "Why hire a google ads expert in india instead of a global agency?",
        answer: "Local bidding costs, competition levels, and buyer behavior differ from what a generic international playbook assumes. Working with someone who manages accounts in the Indian market day to day tends to catch things a broader agency misses."
      },
      {
        id: 'faq-5',
        question: "What's included when I hire your google ads agency?",
        answer: "Strategy, campaign setup, ad creative, ongoing optimization, and weekly reporting. Everything from the first keyword list to the monthly numbers review."
      }
    ],
  },

  difference: {
    titleHtml: (
      <>Why Choose Our <span className="text-[#FF6A00]">Google Ads Agency</span></>
    ),
    subtitle: "We focus on real returns, not vanity metrics.",
    cards: [
      {
        id: 'diff-1',
        title: 'Local Expertise',
        description: "Our team includes a dedicated google ads expert in india who understands local bidding costs and competition.",
        icon: <MapPin className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'diff-2',
        title: 'Transparent Pricing',
        description: "You'll know exactly what you're paying for. No vague line items or surprise add-ons later.",
        icon: <DollarSign className="w-7 h-7" strokeWidth={2.5} />,
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
      role: 'Home Services Business',
      text: "\"Our cost per lead dropped by almost a third in the first month. We didn't expect results that fast.\"",
      image: '/images/testimonials/avatar-1.jpg',
    },
    {
      id: 2,
      name: 'Placeholder Client 2',
      role: 'D2C Ecommerce Brand',
      text: "\"The shopping campaign rebuild alone paid for the whole month's management fee.\"",
      image: '/images/testimonials/avatar-2.jpg',
    },
    {
      id: 3,
      name: 'Placeholder Client 3',
      role: 'B2B SaaS Company',
      text: "\"Weekly reports we actually understand, and a lower cost per click than our last agency managed.\"",
      image: '/images/testimonials/avatar-3.jpg',
    },
  ],
};
