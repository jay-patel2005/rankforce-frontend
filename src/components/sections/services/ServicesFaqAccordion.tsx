"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long until I start seeing results?",
    answer: "SEO is a long-term game. While some quick wins can happen in the first month, noticeable and consistent organic growth typically takes 3 to 6 months, depending on your industry's competitiveness.",
  },
  {
    question: "Do you offer monthly reporting?",
    answer: "Yes, you will receive a comprehensive report every month detailing your traffic growth, keyword rankings, and the specific actions I've taken to improve your SEO.",
  },
  {
    question: "Do you also handle social media and paid ads?",
    answer: "Absolutely! Beyond SEO, I offer full-funnel digital marketing services including social media management and performance marketing (PPC) to provide a holistic growth strategy.",
  },
  {
    question: "How is pricing decided for my project?",
    answer: "Pricing is completely custom and based on your specific business goals, the current state of your website, and the level of competition in your industry. I don't believe in generic packages.",
  },
  {
    question: "Do I need a website to start SEO?",
    answer: "A website is highly recommended as it acts as your central hub. However, if you don't have one yet, I also offer website design and development services to get you started on the right foot.",
  },
  {
    question: "Can you work with businesses outside India?",
    answer: "Yes, I provide Global SEO services and work with clients worldwide to help them rank in their target international markets.",
  },
];

export default function ServicesFaqAccordion() {
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
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section className="bg-white py-6 lg:py-8" id="faq">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <motion.div 
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
        >
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            Got Questions?
          </span>
          <h2 className="text-3xl font-bold text-dark-800 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Disclosure>
                {({ open }) => (
                  <div
                    className={`rounded-xl border transition-colors ${
                      open
                        ? "border-primary/30 bg-primary-50/50"
                        : "border-gray-border bg-white hover:border-primary/20"
                    }`}
                  >
                    <Disclosure.Button className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none">
                      <span className="text-lg font-semibold text-dark-800">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`ml-4 h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </Disclosure.Button>
                    <AnimatePresence>
                      {open && (
                        <Disclosure.Panel static as={motion.div}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-[15px] leading-relaxed text-gray-body">
                            {faq.answer}
                          </div>
                        </Disclosure.Panel>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
