"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Users, TrendingUp, Calendar, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    end: 4,
    suffix: "+",
    label: "Clients Served",
  },
  {
    icon: TrendingUp,
    end: 3.2,
    suffix: "x",
    decimals: 1,
    label: "Avg Traffic Growth",
  },
  {
    icon: Calendar,
    end: 4,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Target,
    end: 50,
    suffix: "+",
    label: "Keywords Ranked",
  },
];

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const t = setTimeout(() => setHasAnimated(true), 0);
      return () => clearTimeout(t);
    }
  }, [isInView, hasAnimated]);

  return (
    <section ref={ref} className="bg-dark py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-primary">
                  <Icon size={24} />
                </div>
                <div className="text-3xl font-extrabold text-white sm:text-4xl">
                  {hasAnimated ? (
                    <CountUp
                      end={stat.end}
                      suffix={stat.suffix}
                      duration={2}
                      decimals={stat.decimals || 0}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <p className="mt-1 text-sm font-medium text-white/60">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
