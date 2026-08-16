"use client";

import { Search, PenTool, Code, BarChart, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    title: "Free Audit & Discovery",
    description: "Understanding your goals and identifying growth opportunities.",
  },
  {
    icon: PenTool,
    title: "Strategy & Keyword Research",
    description: "Mapping out the blueprint to capture high-intent search traffic.",
  },
  {
    icon: Code,
    title: "On-Page + Technical Execution",
    description: "Fixing technical issues and optimizing content structure.",
  },
  {
    icon: BarChart,
    title: "Content & Authority Building",
    description: "Creating assets and earning backlinks to drive authority.",
  },
  {
    icon: RefreshCcw,
    title: "Monthly Reporting & Iteration",
    description: "Tracking progress and pivoting strategies for maximum ROI.",
  },
];

export default function ProcessSection() {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as any }
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "backOut" as any }
    },
  };

  const lineVariantsDesktop = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: { duration: 1.5, ease: "easeInOut" as any }
    },
  };

  const lineVariantsMobile = {
    hidden: { height: "0%" },
    visible: { 
      height: "100%",
      transition: { duration: 0.5, ease: "easeInOut" as any }
    },
  };

  return (
    <section className="bg-cream py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div 
          className="mx-auto mb-16 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          <h2 className="text-3xl font-bold text-dark-800 sm:text-4xl">
            How I Work
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gray-200 overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={lineVariantsDesktop}
            />
          </div>
          
          <motion.div 
            className="flex flex-col lg:flex-row gap-10 lg:gap-6 justify-between"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} variants={stepVariants} className="relative flex flex-col items-center text-center lg:w-1/5 group">
                  {/* Connecting Line (Mobile) */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute top-[90px] left-1/2 -ml-[1px] h-[calc(100%-20px)] w-0.5 bg-gray-200 overflow-hidden">
                      <motion.div 
                        className="w-full bg-primary"
                        variants={lineVariantsMobile}
                      />
                    </div>
                  )}

                  <div className="relative z-10 flex h-[90px] w-[90px] items-center justify-center rounded-full border-[6px] border-cream bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary">
                      <Icon size={28} aria-hidden="true" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm border-2 border-white">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="mb-2 text-[17px] font-bold text-dark-800">
                      {step.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-gray-body px-2">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
