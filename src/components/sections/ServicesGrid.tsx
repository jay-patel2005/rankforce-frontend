"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Globe,
  ShoppingCart,
  Settings,
  Bot,
  FileText,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Local SEO",
    slug: "local-seo",
    description:
      "Dominate Google Maps and local search results. Get found by customers in your area who are ready to buy.",
  },
  {
    icon: Globe,
    title: "Global SEO",
    slug: "global-seo",
    description:
      "Expand your reach internationally with strategic SEO that targets audiences across geographies.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce SEO",
    slug: "ecommerce-seo",
    description:
      "Boost product visibility and drive qualified shoppers to your online store with product-focused SEO.",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    slug: "technical-seo",
    description:
      "Fix crawlability issues, speed up your site, and build the technical foundation search engines love.",
  },
  {
    icon: Bot,
    title: "AI SEO",
    slug: "ai-seo",
    description:
      "Leverage AI-powered strategies for content optimization, keyword research, and competitive analysis.",
  },
  {
    icon: FileText,
    title: "Content & On-Page SEO",
    slug: "content-on-page-seo",
    description:
      "Create compelling, optimized content that ranks and converts — from blog posts to landing pages.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function ServicesGrid() {
  return (
    <section className="bg-white py-6 lg:py-8" id="services">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            What I Do
          </span>
          <h2 className="text-3xl font-bold text-dark-800 sm:text-4xl">
            Services I Offer
          </h2>
          <p className="mt-3 text-gray-body">
            Comprehensive SEO solutions tailored to your business goals — no
            fluff, just what works. Whether you run a local shop or a growing online store, my job as an <strong>SEO company in Ahmedabad</strong> is to make sure the right customers find you first.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-gray-border/60 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-dark-800">
                    {service.title}
                  </h3>
                  <p className="mb-5 flex-1 text-[15px] leading-relaxed text-gray-body">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark">
                    Learn More
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
