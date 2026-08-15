"use client";

import { motion } from "framer-motion";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much do your SEO services cost?",
    answer: "My pricing is transparent and based on the scope of the project. I offer custom packages starting at an honest rate with no hidden fees or long-term lock-in contracts.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term strategy. Typically, you will start seeing measurable improvements in traffic and rankings within 3 to 6 months, depending on your industry and current website state.",
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer: "No ethical SEO expert can guarantee a #1 ranking due to the nature of search algorithms. I do guarantee data-driven, white-hat strategies that have consistently improved rankings and traffic for my clients.",
  },
  {
    question: "What makes working with a freelancer better than an agency?",
    answer: "When you work with me, you communicate directly with the person executing the strategy. You avoid account manager middlemen, get personalized attention, and don't pay for large agency overheads.",
  },
  {
    question: "What is included in your SEO audits?",
    answer: "My SEO audits cover technical performance, on-page optimization, backlink profile analysis, content gaps, and local SEO factors if applicable. You receive an actionable roadmap for improvement.",
  },
  {
    question: "Do you offer monthly reporting?",
    answer: "Yes, I provide clear, transparent monthly reports highlighting key metrics like organic traffic growth, keyword rankings, and conversions, along with insights and next steps.",
  },
];

export default function FaqAccordion() {
  return (
    <section className="bg-white py-6 lg:py-8" id="faq">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            Got Questions?
          </span>
          <h2 className="text-3xl font-bold text-dark-800 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
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
                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 pb-5 text-[15px] leading-relaxed text-gray-body">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
