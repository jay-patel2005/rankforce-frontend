"use client";

import { useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight, TrendingUp, Users, Target } from "lucide-react";

const caseStudies = [
  {
    slug: "ecommerce-traffic-growth",
    category: "Ecommerce SEO",
    title: "3x Organic Traffic for an Online Store in 6 Months",
    metrics: [
      { icon: TrendingUp, value: "3x", label: "Traffic Growth" },
      { icon: Users, value: "180%", label: "More Leads" },
      { icon: Target, value: "35+", label: "Keywords Page 1" },
    ],
  },
  {
    slug: "local-business-seo",
    category: "Local SEO",
    title: "From Page 5 to Google Map Pack for a Local Service Business",
    metrics: [
      { icon: TrendingUp, value: "5x", label: "Local Visibility" },
      { icon: Users, value: "120%", label: "Call Increase" },
      { icon: Target, value: "15+", label: "Local Keywords" },
    ],
  },
];

export default function CaseStudyShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-white py-6 lg:py-8" id="case-studies">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
              My Work
            </span>
            <h2 className="text-3xl font-bold text-dark-800 sm:text-4xl">
              Case Studies
            </h2>
            <p className="mt-2 max-w-lg text-gray-body">
              Real results from real projects — here&apos;s what honest SEO looks
              like.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-border text-dark-800 transition-all hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Previous case study"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-border text-dark-800 transition-all hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Next case study"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_85%] lg:flex-[0_0_48%]"
              >
                <div className="group overflow-hidden rounded-2xl border border-gray-border/60 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]">
                  {/* Image placeholder */}
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary-50 via-cream to-primary-100 sm:h-60">
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                        {study.category}
                      </span>
                    </div>
                    <div className="flex h-full items-center justify-center text-sm text-gray-muted">
                      Case Study Image
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-4 text-lg font-bold leading-snug text-dark-800">
                      {study.title}
                    </h3>

                    {/* Metrics */}
                    <div className="mb-5 grid grid-cols-3 gap-3">
                      {study.metrics.map((m) => {
                        const Icon = m.icon;
                        return (
                          <div
                            key={m.label}
                            className="rounded-xl bg-cream p-3 text-center"
                          >
                            <Icon
                              size={16}
                              className="mx-auto mb-1 text-primary"
                            />
                            <div className="text-lg font-bold text-dark-800">
                              {m.value}
                            </div>
                            <div className="text-xs text-gray-muted">
                              {m.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      Explore Case Study
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-200 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
