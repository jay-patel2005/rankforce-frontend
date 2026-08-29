"use client";

import Link from "next/link";
import {
  Share2,
  TrendingUp,
  Star,
  PenTool,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const otherServices = [
  {
    icon: Share2,
    title: "Social Media Marketing & Handling",
    slug: "social-media-marketing",
    description: "Build an engaged community and increase brand awareness across all major social platforms.",
  },
  {
    icon: TrendingUp,
    title: "Meta Ads",
    slug: "meta-ads",
    description: "Maximize your ROAS with highly targeted campaigns on Google Ads and Meta Ads.",
  },
  {
    icon: Star,
    title: "Online Reputation Management (ORM)",
    slug: "online-reputation-management",
    description: "Protect and enhance your brand image. Manage reviews and control the narrative.",
  },
  {
    icon: PenTool,
    title: "Content Marketing & Copywriting",
    slug: "content-marketing",
    description: "Engage your audience with high-quality, persuasive content that drives action.",
  },
  {
    icon: Monitor,
    title: "Website Design & Development",
    slug: "website-design",
    description: "Fast, responsive, and conversion-optimized websites built for growth and user experience.",
  },
];

export default function OtherServicesGrid() {
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
      transition: { duration: 0.5, ease: "easeOut" as any }
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as any }
    },
  };

  return (
    <section className="bg-white py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div 
          className="mx-auto mb-14 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            BEYOND SEO
          </span>
          <h2 className="text-3xl font-bold text-dark-800 sm:text-4xl mb-4">
            Full-Funnel Digital Marketing Support
          </h2>
          <p className="text-gray-body text-lg">
            I also help businesses grow through complementary digital marketing services that align perfectly with your SEO strategy.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {otherServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="relative group flex h-full flex-col rounded-2xl border border-gray-border/60 bg-gray-50/50 p-7 shadow-sm transition-all duration-250 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-md overflow-hidden"
                >
                  {/* Thin top border for visual distinction */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light to-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="mb-5 mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-dark-800 shadow-sm transition-all duration-250 group-hover:bg-primary-50 group-hover:text-primary group-hover:scale-110 border border-gray-100">
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
