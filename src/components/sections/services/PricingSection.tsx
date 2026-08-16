"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any }
    },
  };

  return (
    <section className="bg-cream py-6 lg:py-8">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <motion.div 
          className="rounded-3xl border border-gray-border bg-white p-8 sm:p-12 text-center shadow-lg relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
        >
          {/* Subtle decoration */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold text-dark-800 sm:text-4xl">
              Custom Pricing, Based on Your Project
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-body">
              Pricing depends on your business size, competition level, and the specific scope of work required to reach your goals. I don&apos;t offer generic, one-size-fits-all packages because they rarely reflect real project needs. Let&apos;s discuss your situation and I&apos;ll provide an honest, custom quote.
            </p>
            
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40"
            >
              Get a Free Quote
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
