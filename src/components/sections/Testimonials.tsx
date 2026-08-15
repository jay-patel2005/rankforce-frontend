"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Placeholder Client 1",
    role: "CEO, Tech Startup",
    text: "JD completely transformed our organic traffic. Within 3 months, we saw a 200% increase in qualified leads. Highly recommended for transparent and effective SEO.",
    rating: 5,
  },
  {
    id: 2,
    name: "Placeholder Client 2",
    role: "Founder, Local Business",
    text: "Working with JD has been a breeze. He explains everything clearly and delivers on his promises. Our local visibility is better than ever.",
    rating: 5,
  },
  {
    id: 3,
    name: "Placeholder Client 3",
    role: "Marketing Director, E-commerce",
    text: "The technical SEO audit was incredibly thorough, and the implementation was smooth. Our organic revenue has grown steadily since we partnered with JD.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-cream py-6 lg:py-8" id="testimonials">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            Client Feedback
          </span>
          <h2 className="text-3xl font-bold text-dark-800 sm:text-4xl">
            What Clients Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-gray-border bg-white px-4 py-1.5 shadow-sm">
            <span className="font-semibold text-dark-800">4.9</span>
            <div className="flex text-primary">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <span className="text-sm font-medium text-gray-muted">
              Google Reviews
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden px-4 py-6" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] lg:flex-[0_0_50%]"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-gray-border/60 bg-white p-8 shadow-[var(--shadow-card)]">
                    <div className="mb-4 flex text-primary">
                      {[...Array(t.rating)].map((_, index) => (
                        <Star key={index} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <blockquote className="mb-6 flex-1 text-lg italic text-gray-body">
                      &quot;{t.text}&quot;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      {/* Placeholder Avatar */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-dark-800">{t.name}</div>
                        <div className="text-sm text-gray-muted">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 lg:-left-12">
            <button
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-border bg-white text-dark-800 shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 lg:-right-12">
            <button
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-border bg-white text-dark-800 shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
