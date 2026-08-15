"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PageHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-6 md:pt-28 lg:pt-32 lg:pb-8">
      {/* Subtle gradient orb */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary/4 blur-3xl" />

      <motion.div 
        className="mx-auto max-w-4xl px-5 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.span variants={itemVariants} className="mb-4 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
          WHAT I OFFER
        </motion.span>

        {/* Headline */}
        <motion.h1 variants={itemVariants} className="mb-6 text-4xl leading-[1.15] font-extrabold tracking-tight text-dark-800 sm:text-5xl lg:text-6xl">
          SEO & Digital Marketing Services Built Around Your Business Goals
        </motion.h1>

        {/* Sub-headline */}
        <motion.p variants={itemVariants} className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-body sm:text-xl">
          I don&apos;t believe in generic packages. Every service is tailored specifically to your unique business goals, target audience, and competitive landscape to ensure maximum ROI.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
          >
            Get a Free Audit
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
