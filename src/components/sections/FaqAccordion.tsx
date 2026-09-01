"use client";

import { motion } from "framer-motion";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much do your SEO services cost?",
    answer: "Pricing depends on your goals, competition, and scope of work. Unlike most agencies that lock you into rigid packages, I offer flexible, transparent pricing with no hidden fees. Get in touch for a free audit and a custom quote.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "Most clients start noticing movement within 3 to 6 months, depending on their industry. SEO is a long-term investment, but as an experienced SEO company in Ahmedabad, I make sure you see measurable progress along the way.",
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer: "No ethical SEO service in Ahmedabad can guarantee specific rankings — anyone who promises that isn't being upfront with you. What I can guarantee is white-hat strategies and consistent effort on keywords that matter.",
  },
  {
    question: "What makes working with a freelancer better than an agency?",
    answer: "When you work with typical SEO agencies in Ahmedabad, your project often gets passed between account managers and junior staff. With me, you get direct access to the person doing the actual work, honest pricing, and faster decisions.",
  },
  {
    question: "What is included in your SEO audits?",
    answer: "My free SEO audit covers technical health, on-page optimization, keyword opportunities, backlinks, and local search presence — the same process I follow as a SEO service in Ahmedabad for every new client.",
  },
  {
    question: "Do you offer monthly reporting?",
    answer: "Yes — every client gets clear, jargon-free monthly reports showing rankings, traffic, and leads. As a SEO service in Ahmedabad built on transparency, you'll always know exactly what you're paying for.",
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
