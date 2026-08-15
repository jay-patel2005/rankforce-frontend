"use client";

import Link from "next/link";
import {
  MapPin,
  ShoppingCart,
  Settings,
  FileText,
  Globe,
  Bot,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const coreServices = [
  {
    icon: MapPin,
    title: "Local SEO",
    slug: "local-seo",
    description: "Dominate Google Maps and local search results. Get found by customers in your area who are ready to buy.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce SEO",
    slug: "ecommerce-seo",
    description: "Boost product visibility and drive qualified shoppers to your online store with product-focused SEO.",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    slug: "technical-seo",
    description: "Fix crawlability issues, speed up your site, and build the technical foundation search engines love.",
  },
  {
    icon: FileText,
    title: "On-Page & Content SEO",
    slug: "on-page-content-seo",
    description: "Create compelling, optimized content that ranks and converts — from blog posts to landing pages.",
  },
  {
    icon: Globe,
    title: "Global SEO",
    slug: "global-seo",
    description: "Expand your reach internationally with strategic SEO that targets audiences across geographies.",
  },
  {
    icon: Bot,
    title: "AI SEO",
    slug: "ai-seo",
    description: "Leverage AI-powered strategies for content optimization, keyword research, and competitive analysis.",
  },
];

export default function CoreSeoServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section className="bg-cream py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div 
          className="mx-auto mb-14 max-w-xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          <h2 className="text-3xl font-bold text-dark-800 sm:text-4xl">
            Core SEO Services
          </h2>
        </motion.div>

        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-gray-border/60 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-250 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-all duration-250 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <Icon size={24} aria-hidden="true" />
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
                      className="transition-transform duration-250 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
