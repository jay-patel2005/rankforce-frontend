"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const strengths = [
  "Transparent reporting — no vanity metrics",
  "Honest pricing with no lock-in contracts",
  "Direct communication — work with me, not a middleman",
  "Data-driven strategies tailored to your niche",
];

export default function AboutSection() {
  return (
    <section className="bg-cream py-6 lg:py-8" id="about">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl bg-gray-light">
              {/* Placeholder — replace with next/Image and JD's photo */}
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-cream text-gray-muted">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-4xl font-bold text-primary">
                  JD
                </div>
                <p className="text-sm">Photo coming soon</p>
              </div>
              {/* Orange accent corner */}
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-primary/10" />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
              About Me
            </span>
            <h2 className="text-3xl font-bold text-dark-800 sm:text-4xl">
              Meet Rank Force — Your Trusted SEO Company in Ahmedabad
            </h2>
            <p className="mt-4 leading-relaxed text-gray-body">
              I&apos;m a freelance SEO specialist with over 4 years of experience
              helping businesses grow their organic presence. I believe in honest,
              transparent SEO — no black-hat tricks, no inflated promises, just
              strategies that deliver real, measurable results.
            </p>
            <p className="mt-3 leading-relaxed text-gray-body">
              Unlike most <strong>SEO agencies in Ahmedabad</strong> that hand your project off to a junior team, working with me means direct access to the person actually doing the work. As an independent <strong>SEO company in Ahmedabad</strong>, I keep my client list small on purpose, so every project gets the attention it deserves.
            </p>
            <p className="mt-3 leading-relaxed text-gray-body">
              If you&apos;ve been searching for a <strong>best SEO company in Ahmedabad</strong> that actually picks up the phone and explains what&apos;s happening with your rankings, that&apos;s exactly what I offer.
            </p>

            <ul className="mt-6 space-y-3">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span className="text-[15px] text-dark-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-[15px] font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white"
              >
                Explore More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
