"use client";

import { UserCheck, BarChart3, DollarSign, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: UserCheck,
    title: "Direct Access",
    description: "Work directly with me — no account managers or middlemen. Your project gets my full attention.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Clear, honest reports you can actually understand. No vanity metrics, only data that matters.",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description: "Straightforward pricing with no hidden fees or surprise upsells. You know exactly what you're paying for.",
  },
  {
    icon: MessageCircle,
    title: "Personal Attention",
    description: "As a solo freelancer, I take on limited clients to ensure every project gets the focus it deserves.",
  },
];

export default function WhyChooseMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
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
          className="mx-auto mb-14 max-w-xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          <h2 className="text-3xl font-bold text-dark-800 sm:text-4xl">
            Why Work With Me
          </h2>
        </motion.div>

        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                className="rounded-2xl border border-gray-border/60 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary transition-transform duration-300 hover:scale-110 hover:bg-primary hover:text-white">
                  <Icon size={22} aria-hidden="true" />
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
        </motion.div>
      </div>
    </section>
  );
}
