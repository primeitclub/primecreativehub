"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  {
    year: "2025",
    title: "Global Expansion",
    description:
      "Expanded our reach globally with members from over 50 countries collaborating on projects.",
  },
  {
    year: "2024",
    title: "Workshop Series Launch",
    description:
      "Launched our comprehensive workshop series with expert-led sessions on various creative disciplines.",
  },
  {
    year: "2023",
    title: "100+ Members Join",
    description:
      "Our community grew to over 100 active members, hosting our first online exhibition.",
  },
  {
    year: "2022",
    title: "Creative Hub Founded",
    description:
      "Creative Hub was founded with a vision to bring together artists and designers from around the world.",
  },
];

export default function HistorySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const recentMilestones = milestones.slice(0, 3);

  return (
    <motion.section
      ref={ref}
      className="relative bg-black text-white py-16 px-4 sm:px-8 md:px-16 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* 🌌 Starfield + aurora layers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-stars animate-stars opacity-70" />
        <div
          className="absolute -inset-1 blur-3xl opacity-30 animate-aurora
                    [background:conic-gradient(from_180deg_at_50%_50%,#6ee7ff33,transparent_30%,#a78bfa33_60%,transparent_80%,#6ee7ff33)]"
        />
      </div>

      {/* Comet streaks */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <span className="shooting-star" />
        <span className="shooting-star shooting-star--2" />
        <span className="shooting-star shooting-star--3" />
      </div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white inline-block relative">
          Our Story
          <span className="block w-16 h-1 bg-gradient-to-r from-white/60 via-white to-white/60 mt-3 mx-auto rounded-full"></span>
        </h2>
      </div>

      <div className="relative z-10">
        {/* Vertical line with glow */}
        <div className="flex justify-center absolute left-1/2 -translate-x-1/2 h-full z-0">
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="w-[2px] h-full bg-gradient-to-b from-white/0 via-white/30 to-white/0 shadow-[0_0_12px_2px_rgba(255,255,255,0.15)]"
          />
        </div>

        <div className="space-y-20 relative z-10">
          {recentMilestones.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                className="relative flex flex-col md:flex-row items-start pt-10 md:pt-0"
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 15,
                  delay: idx * 0.2,
                }}
                viewport={{ once: true }}
              >
                {/* Center dot + ripples (top on mobile, middle on md+) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 10,
                    delay: idx * 0.2 + 0.2,
                  }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-white/25 animate-ripple" />
                    <span className="absolute inset-0 rounded-full border border-white/20 animate-ripple [animation-delay:400ms]" />
                    <span className="absolute inset-0 rounded-full border border-white/10 animate-ripple [animation-delay:800ms]" />
                    <div className="w-3 h-3 md:w-3.5 md:h-3.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
                  </div>
                </motion.div>

                {/* Card (spacier hover) */}
                <div
                  className={`w-full md:w-1/2 px-4 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  } ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.03 }}
                    whileTap={{ scale: 0.995 }}
                    className="group rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <Card
                      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md 
                                  shadow-[0_0_0_rgba(0,0,0,0)]
                                  transition-all duration-300
                                  group-hover:border-white/25
                                  group-hover:shadow-[0_10px_40px_rgba(80,160,255,0.15),0_0_40px_rgba(167,139,250,0.15)]"
                    >
                      <CardContent className="py-6 px-6 relative">
                        {/* subtle aurora sheen on hover */}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                     [mask-image:radial-gradient(120px_80px_at_var(--mx,50%)_-20%,white,transparent_60%)]
                                     bg-[radial-gradient(90px_60px_at_50%_-10%,#a78bfa33,transparent_70%),
                                         radial-gradient(120px_80px_at_60%_-30%,#60a5fa2e,transparent_70%)]"
                        />
                        <div className="text-lg sm:text-xl font-bold text-white">
                          {item.year}
                        </div>
                        <div className="text-xl sm:text-2xl font-semibold mt-1 text-white">
                          {item.title}
                        </div>
                        <p className="text-sm sm:text-base mt-2 text-white/80">
                          {item.description}
                        </p>

                        {/* glowing underline on hover */}
                        <span className="block mt-4 h-px w-0 bg-gradient-to-r from-cyan-300/60 via-sky-200 to-fuchsia-300/60 transition-all duration-500 group-hover:w-full" />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          <p className="text-center text-sm italic pt-4 text-white/60">
            More milestones ahead…
          </p>
        </div>
      </div>

      {/* CTA button glow */}
      <div className="mt-10 text-center relative z-10">
        <Link href="/history">
          <Button
            className="relative overflow-hidden text-white bg-white/10 border border-white/20
                         hover:text-black transition-all duration-300 px-6 py-2"
          >
            <span
              className="absolute inset-0 -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300
                         bg-gradient-to-r from-white via-white to-white"
            />
            <span
              className="absolute -inset-8 -z-10 opacity-0 hover:opacity-30 blur-2xl
                         bg-[radial-gradient(closest-side,white,transparent)] transition-opacity duration-300"
            />
            View All
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}
