import React from 'react';
import { ServicePageData } from '@/types/service-page';
import { TrendingUp, DollarSign, Timer, User } from 'lucide-react';
import { EmailMarketingHeroDashboard } from '@/components/sections/services/email-marketing/EmailMarketingHeroDashboard';

export const emailMarketingData: ServicePageData = {
  slug: 'email-marketing',

  // ─── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    badge: 'EMAIL MARKETING',
    titleHtml: (
      <><span className="text-[#FF6A00]">Email Marketing</span> Services</>
    ),
    description:
      'Your list is one of the few marketing channels you actually own. We help you use it properly, with campaigns that get opened, read, and clicked instead of quietly ignored.',
    buttonText: 'Get a Free Email Audit →',
    buttonLink: '/contact',
    rightComponent: <EmailMarketingHeroDashboard />,
  },

  // ─── IMPORTANCE ─────────────────────────────────────────────────────────────
  importance: {
    titleHtml: (
      <>What Is <span className="text-[#FF6A00]">Email Marketing</span></>
    ),
    heading: 'Why Businesses Still Need Email Marketing Services',
    paragraphs: [
      `Social platforms change their algorithm whenever they feel like it, and suddenly the audience you spent years building barely sees your posts. Your email list doesn't have that problem. Every subscriber on it chose to be there, and nobody but the platform's spam filter stands between you and their inbox.`,
      `There's more than one type of email marketing, and most businesses end up needing a mix. Welcome sequences greet new subscribers, newsletters keep the relationship warm, and abandoned-cart or re-engagement emails quietly recover sales that would otherwise just disappear.`,
      `What ties all of it together is a proper email marketing strategy, not a random newsletter sent whenever someone remembers to write one. That's the part most in-house teams skip, and it's usually why the results never quite show up.`,
    ],
    imageSrc: '/images/services/Email Marketing.webp', // Using existing placeholder
    imageAlt: 'Email Marketing visualization',
    layoutVariant: 'wide-image',
  },

  // ─── STAT BAND ──────────────────────────────────────────────────────────────
  statBand: {
    badge: 'Why we focus on it',
    title: 'What Our Email Marketing Services Actually Deliver',
    paragraphs: [
      "For every rupee spent, email still tends to outperform most other digital channels, mainly because you're reaching people who've already raised their hand. The trick is not wasting that attention with sloppy sends.",
    ],
    statCards: [
      { value: '38%', label: 'Avg. open rate improvement', highlightColor: '#FFF1E6' },
      { value: '3.5x', label: 'Higher click-through vs generic sends', highlightColor: '#FFF1E6' },
      { value: '₹36', label: 'Avg. return per ₹1 spent', highlightColor: '#FFF1E6' },
      { value: '92%', label: 'Client retention rate', highlightColor: '#FFF1E6' },
    ],
    quote:
      '"A newsletter nobody reads isn\'t email marketing. It\'s just noise with a send button."',
  },

  // ─── TOOLS ──────────────────────────────────────────────────────────────────
  tools: {
    title: 'Platforms We Use',
    subtitle: '',
    tools: [
      { name: 'Mailchimp', logo: <span className="font-bold text-[14px]">Mailchimp</span> },
      { name: 'Klaviyo', logo: <span className="font-bold text-[14px]">Klaviyo</span> },
      { name: 'Brevo', logo: <span className="font-bold text-[14px]">Brevo</span> },
      { name: 'ActiveCampaign', logo: <span className="font-bold text-[14px]">ActiveCampaign</span> },
      { name: 'HubSpot', logo: <span className="font-bold text-[14px]">HubSpot</span> },
      { name: 'GA4', logo: <span className="font-bold text-[14px]">GA4</span> },
    ],
  },

  // ─── IMPLEMENT ──────────────────────────────────────────────────────────────
  implement: {
    badge: 'What we do',
    title: 'What We Implement in Our Email Marketing Services',
    description:
      "Good email marketing isn't a single newsletter template reused forever. Here's what actually goes into building an email marketing strategy that keeps working month after month.",
    items: [
      {
        id: '1',
        icon: '👋',
        title: 'Welcome & Onboarding Sequences',
        description:
          'The first few emails a new subscriber gets set the tone for everything after. We make sure they actually earn the next open.',
      },
      {
        id: '2',
        icon: '⚙️',
        title: 'Automation Workflows',
        description:
          "Abandoned-cart, win-back, and post-purchase flows are one type of email marketing that runs quietly in the background once it's built properly.",
      },
      {
        id: '3',
        icon: '👥',
        title: 'List Segmentation',
        description:
          'Sending the same email to everyone is how open rates quietly die. We split lists by behavior so the message actually fits the person reading it.',
      },
      {
        id: '4',
        icon: '⚖️',
        title: 'Subject Line & A/B Testing',
        description:
          'Small wording changes can shift open rates more than people expect. We test instead of guessing which version wins.',
      },
      {
        id: '5',
        icon: '✉️',
        title: 'Newsletter Design & Copy',
        description:
          'Written for the person opening it, not copy-pasted from your last blog post and hoping it reads fine as an email.',
      },
      {
        id: '6',
        icon: '📈',
        title: 'List Growth & Opt-Ins',
        description:
          'Pop-ups, lead magnets, and sign-up forms that grow your list without annoying the people already on your site.',
      },
      {
        id: '7',
        icon: '🛡️',
        title: 'Deliverability & Compliance',
        description:
          'Authentication, sender reputation, and unsubscribe handling done right so your emails land in the inbox, not spam.',
      },
      {
        id: '8',
        icon: '📊',
        title: 'Reporting & Optimization',
        description:
          'Open rates, clicks, and revenue tracked per campaign, with each send used to improve the next one.',
      },
    ],
  },

  // ─── CHECKLIST ──────────────────────────────────────────────────────────────
  checklist: {
    title: 'Your Quick Email Checklist',
    descriptionHtml: (
      <>
        Curious how your current sends actually stack up? Run through this list yourself first. Most of it takes fifteen minutes.
      </>
    ),
    columns: ['Element', 'What to Check', 'Quick Tool'],
    rows: [
      { element: 'Sender Authentication', check: 'SPF, DKIM, and DMARC set up correctly', tool: 'MXToolbox' },
      { element: 'Subject Lines', check: 'Under 50 characters, no spam trigger words', tool: 'Manual review' },
      { element: 'List Hygiene', check: 'Inactive and bounced addresses removed regularly', tool: 'Mailchimp / Klaviyo' },
      { element: 'Segmentation', check: 'Lists split by behavior, not sent as one blast', tool: 'Manual audit' },
      { element: 'Mobile Rendering', check: 'Emails display cleanly on phone screens', tool: 'Litmus' },
      { element: 'Automation Flows', check: 'Welcome and abandoned-cart sequences active', tool: 'Klaviyo' },
      { element: 'Unsubscribe Link', check: 'Visible, working, one click to opt out', tool: 'Manual audit' },
      { element: 'Reporting', check: 'Open, click, and revenue tracked per send', tool: 'GA4' },
    ],
    footerText:
      "Not in the mood for a manual audit? Fair enough — that's exactly what proper email marketing services are for. A few small fixes can be quietly costing you sales right now.",
  },

  // ─── FAQ ────────────────────────────────────────────────────────────────────
  faq: {
    badge: 'FAQ',
    titleHtml: <>Frequently Asked <span className="text-[#FF6A00]">Email Questions</span></>,
    items: [
      {
        id: 'faq-1',
        question: 'What is email marketing?',
        answer:
          "It's the practice of sending targeted messages to a list of subscribers who've opted in, whether that's a newsletter, a promotional offer, or an automated sequence triggered by something they did on your site.",
      },
      {
        id: 'faq-2',
        question: "What type of email marketing should I start with?",
        answer:
          "Most businesses start with a welcome sequence and a regular newsletter, then layer in automation like cart-recovery or win-back flows once the basics are in place.",
      },
      {
        id: 'faq-3',
        question: 'Do I need an email marketing agency, or can I manage it myself?',
        answer:
          "You can absolutely run it yourself early on. Once your list grows and automation, segmentation, and deliverability start piling up, most owners find they'd rather hand it to a dedicated email marketing agency than keep patching it together.",
      },
      {
        id: 'faq-4',
        question: 'What\'s included in your email marketing services?',
        answer:
          "Strategy, list segmentation, campaign design, automation setup, deliverability checks, and monthly reporting. Everything from the first welcome email to the ongoing sends.",
      },
      {
        id: 'faq-5',
        question: 'How do you build an email marketing strategy for a brand-new list?',
        answer:
          "We start with a welcome sequence and a simple sending cadence, then adjust the approach as we see what your specific audience actually opens and clicks.",
      },
    ],
  },

  // ─── WHY CHOOSE ─────────────────────────────────────────────────────────────
  difference: {
    titleHtml: (
      <>Why Choose Our<br /><span className="text-[#FF6A00]">Email Marketing Services</span></>
    ),
    subtitle: '',
    cards: [
      {
        id: 'd1',
        title: 'Proven Frameworks',
        description: "Sequences and campaign structures that have already worked elsewhere, not guesswork on your list.",
        icon: <TrendingUp className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd2',
        title: 'Transparent Pricing',
        description: 'You\'ll know exactly what you\'re paying for. No vague line items or surprise add-ons later.',
        icon: <DollarSign className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd3',
        title: 'Fast Turnaround',
        description: 'Campaigns and flows go live quickly, without cutting corners on the copy or design.',
        icon: <Timer className="w-7 h-7" strokeWidth={2.5} />,
      },
      {
        id: 'd4',
        title: 'Direct Access',
        description: 'Unlike a large email marketing agency juggling hundreds of accounts, you get the person actually writing and building your campaigns.',
        icon: <User className="w-7 h-7" strokeWidth={2.5} />,
      },
    ],
  },

  // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: 'Placeholder Client 1',
      role: 'D2C Skincare Brand',
      text: '"Our welcome sequence alone brought in more revenue in a month than our old one did all year."',
      image: 'https://ui-avatars.com/api/?name=Client+1&background=FF6A00&color=fff',
    },
    {
      id: 2,
      name: 'Placeholder Client 2',
      role: 'SaaS Company',
      text: '"They fixed our deliverability issues in the first two weeks. Emails were landing in spam before that."',
      image: 'https://ui-avatars.com/api/?name=Client+2&background=FF6A00&color=fff',
    },
    {
      id: 3,
      name: 'Placeholder Client 3',
      role: 'Home & Living Brand',
      text: '"Open rates nearly doubled once the segmentation was actually done properly."',
      image: 'https://ui-avatars.com/api/?name=Client+3&background=FF6A00&color=fff',
    },
  ],
};
