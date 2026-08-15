"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  BarChart3,
  DollarSign,
  MessageCircle,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Direct Access",
    description:
      "Work directly with me — no account managers or middlemen. Your project gets my full attention.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description:
      "Clear, honest reports you can actually understand. No vanity metrics, only data that matters.",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description:
      "Straightforward pricing with no hidden fees or surprise upsells. You know exactly what you're paying for.",
  },
  {
    icon: MessageCircle,
    title: "Personal Attention",
    description:
      "As a solo freelancer, I take on limited clients to ensure every project gets the focus it deserves.",
  },
  {
    icon: Shield,
    title: "White-Hat Only",
    description:
      "Ethical SEO strategies that build lasting results. No shortcuts that risk penalties or deindexing.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "No bureaucratic delays. Quick communication, fast implementation, and agile adjustments as needed.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-6 lg:py-8" id="why-me">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            The Difference
          </span>
          <h2 className="text-3xl font-bold text-dark-800 sm:text-4xl">
            Why Work With Me
          </h2>
          <p className="mt-3 text-gray-body">
            The advantages of working with a dedicated freelancer who genuinely
            cares about your success.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="rounded-2xl border border-gray-border/60 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-dark-800">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-body">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
