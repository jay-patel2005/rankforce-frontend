"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  ShoppingCart,
  Settings,
  FileText,
  Globe,
  Sparkles,
  Search,
  BarChart2,
  Share2,
  TrendingUp,
  PenTool,
  Target,
  Megaphone,
  Mail,
  Layers,
  Cloud,
  Monitor,
  Rocket,
  Zap,
  Link as LinkIcon,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export const servicesMenu: ServiceCategory[] = [
  {
    title: "SEO SERVICES",
    items: [
      { label: "Local SEO", href: "/services/local-seo", icon: MapPin },
      { label: "Ecommerce SEO", href: "/services/ecommerce-seo", icon: ShoppingCart },
      { label: "Technical SEO", href: "/services/technical-seo", icon: Settings },
      { label: "On Page SEO", href: "/services/on-page-seo", icon: FileText },
      { label: "Global / International SEO", href: "/services/global-seo", icon: Globe },
      { label: "AI SEO / AEO", href: "/services/ai-seo", icon: Sparkles },
      { label: "Keyword Research", href: "/services/keyword-research", icon: Search },
      { label: "SEO Audit", href: "/services/seo-audit", icon: BarChart2 },
    ],
  },
  {
    title: "DIGITAL MARKETING",
    items: [
      { label: "Social Media Marketing", href: "/services/social-media-marketing", icon: Share2 },
      { label: "Performance Marketing / PPC", href: "/services/performance-marketing", icon: TrendingUp },
      { label: "Content Marketing", href: "/services/content-marketing", icon: PenTool },
      { label: "Google Ads", href: "/services/google-ads", icon: Target },
      { label: "Social Media Ads", href: "/services/social-ads", icon: Megaphone },
      { label: "Email Marketing", href: "/services/email-marketing", icon: Mail },
    ],
  },
  {
    title: "WEBSITE DEVELOPMENT",
    items: [
      { label: "Full-Stack Development", href: "/services/full-stack-development", icon: Layers },
      { label: "SaaS Development", href: "/services/saas-development", icon: Cloud },
      { label: "Business Website Development", href: "/services/business-websites", icon: Monitor },
      { label: "Ecommerce Development", href: "/services/ecommerce-development", icon: ShoppingCart },
      { label: "Landing Page Development", href: "/services/landing-pages", icon: Rocket },
      { label: "Web Application Development", href: "/services/web-applications", icon: Zap },
      { label: "API & Third-Party Integrations", href: "/services/api-integrations", icon: LinkIcon },
      { label: "Website Maintenance & Optimization", href: "/services/website-maintenance", icon: Wrench },
    ],
  },
];

/* ── Desktop item ──────────────────────────────────── */

function DesktopServiceItem({ item }: { item: ServiceItem }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className="group flex items-center gap-2 rounded-md px-2 py-[9px] transition-all duration-150 hover:bg-primary/5"
    >
      <Icon
        size={15}
        className="shrink-0 text-primary transition-transform duration-150 group-hover:scale-110"
        aria-hidden="true"
      />
      <span className="text-[13px] font-medium leading-snug text-gray-700 transition-all duration-150 group-hover:translate-x-[3px] group-hover:text-primary">
        {item.label}
      </span>
    </Link>
  );
}

/* ── Desktop column ────────────────────────────────── */

function DesktopServiceColumn({ category }: { category: ServiceCategory }) {
  return (
    <div className="group/col flex flex-col">
      <div className="mb-4">
        <p className="text-[11px] font-bold uppercase tracking-wider text-dark-800 transition-colors duration-200 group-hover/col:text-primary">
          {category.title}
        </p>
        <div className="mt-2.5 h-px w-full bg-gray-200 transition-colors duration-200 group-hover/col:bg-primary/50" />
      </div>
      <div className="flex flex-col">
        {category.items.map((item) => (
          <DesktopServiceItem key={item.href} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ── Desktop panel ─────────────────────────────────── */

export function DesktopMegaMenuPanel({
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute left-0 right-0 top-full z-50 px-4 pt-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id="services-mega-menu"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className="rounded-xl border border-gray-200 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
          onClick={onClose}
        >
          <div className="grid grid-cols-3 items-start p-8 divide-x divide-gray-100">
            {servicesMenu.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className={index > 0 ? "pl-8" : "pr-8"}
              >
                <DesktopServiceColumn category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
