"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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
  const recentMilestones = milestones.slice(0, 3);

  return (
    <motion.section
      className="bg-black text-white py-16 px-4 sm:px-8 md:px-16 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white inline-block relative">
          Our Story
          <span className="block w-16 h-1 bg-white mt-3 mx-auto"></span>
        </h2>
      </div>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-white/20 z-0" />

        <div className="space-y-20 relative z-10">
          {recentMilestones.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                className="relative flex flex-col md:flex-row items-start"
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
                {/* Glowing Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full z-10 animate-pulse-glow" />

                {/* Card Container */}
                <div
                  className={`w-full md:w-1/2 px-4 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  } ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <div className="rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                    <Card className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 shadow-md transition-all duration-300">
                      <CardContent className="py-6 px-6">
                        <div className="text-lg sm:text-xl font-bold text-white">
                          {item.year}
                        </div>
                        <div className="text-xl sm:text-2xl font-semibold mt-1 text-white">
                          {item.title}
                        </div>
                        <p className="text-sm sm:text-base mt-2 text-white/80 line-clamp-2">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <p className="text-center text-sm italic pt-4 text-white/60">
            More milestones ahead…
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link href="/history">
          <Button className="text-white bg-white/10 border border-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-2">
            View All
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}
