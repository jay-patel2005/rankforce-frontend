"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Home,
  Heart,
  Monitor,
  Package,
  Store,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    label: "Ecommerce",
    description: "Drive qualified traffic and turn searches into customers.",
    colorClass: "text-orange-500",
    colorHex: "#f97316",
  },
  {
    icon: Home,
    label: "Real Estate",
    description: "Reach high-intent buyers with effective local SEO strategies.",
    colorClass: "text-yellow-500",
    colorHex: "#eab308",
  },
  {
    icon: Heart,
    label: "Healthcare",
    description: "Build trusted visibility and connect with patients online.",
    colorClass: "text-red-500",
    colorHex: "#ef4444",
  },
  {
    icon: Monitor,
    label: "SaaS",
    description: "Increase organic signups with scalable and data-driven SEO.",
    colorClass: "text-purple-500",
    colorHex: "#a855f7",
  },
  {
    icon: Package,
    label: "D2C Brands",
    description: "Turn product searches into sustainable brand growth.",
    colorClass: "text-blue-500",
    colorHex: "#3b82f6",
  },
  {
    icon: Store,
    label: "Local Business",
    description: "Dominate local searches and attract more nearby customers.",
    colorClass: "text-teal-500",
    colorHex: "#14b8a6",
  },
  {
    icon: GraduationCap,
    label: "Education",
    description: "Connect with students through high-intent search queries.",
    colorClass: "text-green-500",
    colorHex: "#22c55e",
  },
  {
    icon: Briefcase,
    label: "Professional Services",
    description: "Build authority, trust, and generate high-quality leads.",
    colorClass: "text-orange-500", // Reusing orange as accent for the last item
    colorHex: "#f97316",
  },
];

export default function IndustriesServed() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] py-6 lg:py-8">
      <div className="relative z-10 mx-auto max-w-[1350px] px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-[13px] font-semibold tracking-wider text-primary uppercase sm:text-[14px]">
            INDUSTRIES I SERVE
          </span>
          <h2 className="mb-4 text-[30px] font-extrabold leading-tight text-dark-800 sm:text-[34px] lg:text-[44px]">
            Industries I Serve
          </h2>
          <p className="text-[16px] leading-relaxed text-gray-body sm:text-[18px]">
            SEO strategies tailored to the unique goals, audiences, and challenges of different industries.
          </p>
        </motion.div>

        {/* Connected Flow Layout */}
        <div className="relative flex w-full flex-col gap-y-12 md:flex-row md:gap-y-0 md:overflow-x-auto md:pb-8 md:pt-4 md:snap-x md:snap-mandatory lg:overflow-x-visible lg:pb-0 lg:pt-0">
          {industries.map((item, i) => {
            const Icon = item.icon;
            const nextItem = industries[i + 1];
            const isLast = i === industries.length - 1;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex w-full flex-col items-center z-10 md:w-[260px] md:shrink-0 md:snap-center lg:w-[12.5%] lg:shrink"
              >
                {/* Horizontal Wavy Connector (Desktop & Tablet) */}
                <div className={`absolute top-[50px] left-[50%] -z-10 hidden w-full h-16 -translate-y-1/2 md:block ${isLast ? 'hidden md:hidden lg:hidden' : ''}`}>
                  <svg viewBox="0 0 100 64" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d={i % 2 === 0 ? "M 0 32 C 30 0, 70 0, 100 32" : "M 0 32 C 30 64, 70 64, 100 32"}
                      fill="none"
                      stroke={`url(#grad-horiz-${i})`}
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      vectorEffect="non-scaling-stroke"
                    />
                    <defs>
                      <linearGradient id={`grad-horiz-${i}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={item.colorHex} />
                        <stop offset="100%" stopColor={nextItem?.colorHex || item.colorHex} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Vertical Dashed Connector (Mobile) */}
                <div className={`absolute top-[50px] left-[50%] -z-10 h-[calc(100%+3rem)] w-4 -translate-x-1/2 md:hidden ${isLast ? 'hidden' : 'block'}`}>
                  <svg viewBox="0 0 4 100" preserveAspectRatio="none" className="w-full h-full">
                    <line
                      x1="2" y1="0" x2="2" y2="100"
                      stroke={`url(#grad-vert-${i})`}
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      vectorEffect="non-scaling-stroke"
                    />
                    <defs>
                      <linearGradient id={`grad-vert-${i}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={item.colorHex} />
                        <stop offset="100%" stopColor={nextItem?.colorHex || item.colorHex} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Hoverable Circle Area */}
                <div className="relative flex h-[100px] w-[100px] items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-1">

                  {/* Outer faint circle */}
                  <div className="absolute inset-0 rounded-full border border-gray-200/80 bg-white" />

                  {/* Colored Arc Orbit */}
                  <svg
                    className={`absolute inset-0 h-full w-full opacity-80 transition-transform duration-500 ease-out group-hover:scale-105 ${i % 2 === 0 ? 'rotate-0' : 'rotate-180'}`}
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M 88 50 A 38 38 0 0 1 12 50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      className={item.colorClass}
                    />
                  </svg>

                  {/* Subtle Pulse Effect */}
                  <div className={`absolute inset-1 rounded-full bg-current opacity-0 transition-opacity duration-500 motion-safe:group-hover:animate-pulse motion-safe:group-hover:opacity-10 ${item.colorClass}`} />

                  {/* Inner White Circle with Icon */}
                  <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-full border border-gray-50 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                    <Icon size={24} className={`transition-transform duration-300 group-hover:scale-110 ${item.colorClass}`} />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`mt-6 text-left px-1 ${isLast ? 'min-w-[185px] max-w-[185px]' : 'w-full max-w-[160px]'}`}>
                  <h3 className="mb-2 text-[15px] font-bold text-dark-800 transition-colors duration-300 group-hover:text-black lg:text-[14px] xl:text-[15px]">
                    {item.label}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-500 lg:text-[12px] xl:text-[13px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
