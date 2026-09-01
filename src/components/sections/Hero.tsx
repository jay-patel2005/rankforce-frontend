import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import HeroDashboardCard from "./HeroDashboardCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-1 md:pt-28 lg:pt-32 lg:pb-0">
      {/* Subtle gradient orb */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary/4 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-[60%] flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            

            {/* Headline */}
            <h1 className="mt-12 lg:mt-20 text-4xl leading-[1.15] font-extrabold tracking-tight text-dark-800 sm:text-5xl lg:text-6xl max-w-2xl">
              Best{" "}
              <span className="text-primary">SEO company in Ahmedabad</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-body sm:text-xl">
              I help businesses rank higher on Google with transparent, data-driven
              SEO strategies that turn organic traffic into real revenue. As a results-focused <strong>SEO company in Ahmedabad</strong>, I work directly with you — no account managers, no jargon.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
              >
                Get a Free SEO Audit
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-6 text-sm text-gray-muted">
              Trusted by <span className="font-semibold text-dark-800">4+</span>{" "}
              growing businesses across Ahmedabad and beyond
            </p>
          </div>

          {/* Right Column - Dashboard Card Mockup (Hidden on mobile) */}
          <div className="hidden md:flex w-full lg:w-[40%] justify-center lg:justify-end mt-12 lg:mt-0 max-w-full overflow-hidden px-4 sm:px-12 lg:px-0">
            <HeroDashboardCard />
          </div>
        </div>
      </div>
    </section>
  );
}
