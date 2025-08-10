"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// -----------------
// Types & Data
// -----------------
interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  details: string;
  images: string[];
}

const placeholderImage =
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

const milestones: Milestone[] = [
  {
    id: "2025-global",
    year: "2025",
    title: "Global Expansion",
    description:
      "Expanded our reach globally with members from over 50 countries collaborating on projects.",
    details:
      "We onboarded regional leads, launched multi-language support, and opened partner chapters in APAC, EMEA, and the Americas. This enabled 24/7 collaboration and accelerated our delivery timelines.",
    images: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: "2024-workshops",
    year: "2024",
    title: "Workshop Series Launch",
    description:
      "Launched our comprehensive workshop series with expert-led sessions on creative disciplines.",
    details:
      "Over 40 live sessions covered design systems, motion, 3D, sound design, and storytelling. Average satisfaction was 4.8/5, with 3,000+ cumulative attendees across cohorts.",
    images: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: "2023-100-members",
    year: "2023",
    title: "100+ Members Join",
    description:
      "Our community grew to over 100 active members, hosting our first online exhibition.",
    details:
      "We introduced peer reviews, monthly showcases, and cross-discipline teams. The exhibition featured 65 projects, reaching 20k viewers in the first week.",
    images: [placeholderImage, placeholderImage, placeholderImage],
  },
  {
    id: "2022-founded",
    year: "2022",
    title: "Creative Hub Founded",
    description:
      "Founded with a vision to bring together artists and designers from around the world.",
    details:
      "Started as a small Discord group and evolved into a structured hub with mentorship, curated resources, and collaborative challenges.",
    images: [placeholderImage, placeholderImage, placeholderImage],
  },
];

// Smooth, symmetrical ease for open/close
const MATERIAL_EASE = [0.4, 0, 0.2, 1] as const;

export default function HistoryPage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const prefersReducedMotion = useReducedMotion();

  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = useMemo<Milestone | null>(
    () => milestones.find((m) => m.id === activeId) || null,
    [activeId]
  );

  // Close on Escape for accessibility
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <MotionConfig
      transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.9 }}
    >
      <motion.section
        ref={ref}
        className="relative bg-black text-white py-16 px-4 sm:px-8 md:px-16 overflow-hidden min-h-screen"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-stars animate-stars opacity-70" />
          <div className="absolute -inset-1 blur-3xl opacity-25 animate-aurora [background:conic-gradient(from_180deg_at_50%_50%,#6ee7ff33,transparent_30%,#a78bfa33_60%,transparent_80%,#6ee7ff33)]" />
        </div>

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">History</h1>
          <p className="text-white/70 mt-3">
            A complete, scrollable timeline of our milestones
          </p>
        </header>

        {/* Timeline axis */}
        <div className="relative">
          <div className="flex justify-center absolute left-1/2 -translate-x-1/2 h-full z-0">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="w-[2px] h-full bg-gradient-to-b from-white/0 via-white/30 to-white/0 shadow-[0_0_12px_2px_rgba(255,255,255,0.15)]"
            />
          </div>

          <ul className="space-y-16 md:space-y-24 relative z-10">
            {milestones.map((m, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li
                  key={m.id}
                  className="relative flex flex-col md:flex-row items-start pt-10 md:pt-0"
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                      <span className="absolute inset-0 rounded-full border border-white/25 animate-ripple" />
                      <span className="absolute inset-0 rounded-full border border-white/20 animate-ripple [animation-delay:400ms]" />
                      <span className="absolute inset-0 rounded-full border border-white/10 animate-ripple [animation-delay:800ms]" />
                      <div className="w-3 h-3 md:w-3.5 md:h-3.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
                    </div>
                  </div>

                  {/* Card with shared layout id */}
                  <div
                    className={`w-full md:w-1/2 px-4 ${
                      isLeft
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left"
                    } ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                  >
                    <motion.button
                      type="button"
                      layoutId={`card-${m.id}`}
                      onClick={() => setActiveId(m.id)}
                      className="group w-full rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer focus:outline-none"
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{
                        scale: 0.98,
                        rotateZ: prefersReducedMotion ? 0 : 2,
                      }}
                    >
                      <Card className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:border-white/25 group-hover:shadow-[0_12px_40px_rgba(148,163,184,0.15),_0_0_40px_rgba(255,255,255,0.08)]">
                        <CardContent className="py-6 px-6 relative">
                          <div
                            className={`flex items-center gap-3 ${
                              isLeft
                                ? "justify-end md:flex-row-reverse"
                                : "justify-start"
                            }`}
                          >
                            <motion.span
                              layoutId={`pill-${m.id}`}
                              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide text-white"
                            >
                              <span className="h-2 w-2 rounded-full bg-white/80 shadow" />
                              {m.year}
                            </motion.span>
                            <motion.h3
                              layoutId={`title-${m.id}`}
                              className="text-xl sm:text-2xl font-semibold text-white"
                            >
                              {m.title}
                            </motion.h3>
                          </div>

                          <p
                            className={`text-sm sm:text-base mt-3 text-white/80 ${
                              isLeft ? "text-right" : "text-left"
                            }`}
                          >
                            {m.description}
                          </p>

                          <div
                            className={`max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                              isLeft ? "text-right" : "text-left"
                            }`}
                          >
                            <p className="text-sm text-white/70 mt-2">
                              {m.details}
                            </p>
                            <div
                              className={`mt-3 flex gap-2 ${
                                isLeft ? "justify-end" : "justify-start"
                              }`}
                            >
                              {m.images.slice(0, 2).map((src, i) => (
                                <motion.img
                                  key={`${m.id}-thumb-${i}`}
                                  src={src}
                                  alt={`${m.title} preview ${i + 1}`}
                                  className="h-12 w-20 rounded-md object-cover border border-white/10"
                                  layoutId={`img-${m.id}-${i}`}
                                />
                              ))}
                            </div>
                          </div>

                          <span className="block mt-4 h-px w-0 bg-white/80 transition-all duration-500 group-hover:w-full" />
                        </CardContent>
                      </Card>
                    </motion.button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Modal with spin-out-to-center + shared layout */}
        <AnimatePresence mode="wait">
          {activeItem && (
            <motion.div
              key={activeItem.id}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.16, ease: MATERIAL_EASE }}
                onClick={() => setActiveId(null)}
              />

              {/* Wrapper controls fast, even close; inner card uses shared layout map */}
              <motion.div
                className="[perspective:1600px] relative z-[61] w-full max-w-5xl"
                initial={{ opacity: 0.001, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.16, ease: MATERIAL_EASE }}
              >
                <motion.div
                  layoutId={`card-${activeItem.id}`}
                  className="relative rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "50% 20%",
                  }}
                  initial={false}
                  animate={
                    prefersReducedMotion
                      ? { scale: 1, opacity: 1 }
                      : {
                          scale: [0.92, 1],
                          rotateX: [12, 0],
                          rotateZ: [0, 1.5, 0],
                          opacity: [0.96, 1],
                        }
                  }
                  // Let the wrapper handle exit for snappy close
                  exit={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                    mass: 0.85,
                  }}
                >
                  {/* Accent header ribbon for better UI after open */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-white/30 via-white/60 to-white/30" />

                  {/* subtle flip glare while spinning in */}
                  {!prefersReducedMotion && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 [transform:translateZ(1px)]"
                    >
                      <span className="absolute -inset-y-24 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.7),transparent)] blur-[10px] animate-[shine_1.1s_ease-out_0.1s_1]" />
                    </span>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Media gallery */}
                    <div className="relative md:min-h-[440px]">
                      <motion.img
                        layoutId={`img-${activeItem.id}-0`}
                        src={activeItem.images[0]}
                        alt={`${activeItem.title} hero`}
                        className="h-56 md:h-full w-full object-cover"
                      />

                      {/* Thumbs ribbon */}
                      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-3">
                        {activeItem.images.map((src, i) => (
                          <img
                            key={`full-thumb-${i}`}
                            src={src}
                            alt={`thumb ${i + 1}`}
                            className="h-10 w-16 rounded-md object-cover border border-white/20 bg-black/30"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content column */}
                    <div className="p-5 md:p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.span
                          layoutId={`pill-${activeItem.id}`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide text-white"
                        >
                          <span className="h-2 w-2 rounded-full bg-white/80 shadow" />
                          {activeItem.year}
                        </motion.span>
                        <motion.h3
                          layoutId={`title-${activeItem.id}`}
                          className="text-2xl md:text-3xl font-bold text-white"
                        >
                          {activeItem.title}
                        </motion.h3>
                      </div>

                      <p className="text-white/80">{activeItem.description}</p>
                      <p className="text-white/70 mt-3 leading-relaxed">
                        {activeItem.details}
                      </p>

                      {/* Extra meta for richer UI */}
                      <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-white/70">
                        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                          <div className="text-white/60">Impact</div>
                          <div className="text-white font-semibold">High</div>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                          <div className="text-white/60">Category</div>
                          <div className="text-white font-semibold">
                            Milestone
                          </div>
                        </div>
                      </div>

                      {/* CTA row */}
                      <div className="mt-6 flex items-center gap-3">
                        <Button
                          onClick={() => setActiveId(null)}
                          className="bg-white text-black hover:bg-white/90"
                        >
                          Close
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/30 text-black hover:bg-white/80"
                        >
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating close icon */}
                <motion.button
                  aria-label="Close"
                  onClick={() => setActiveId(null)}
                  className="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-[62] h-10 w-10 rounded-full bg-white/90 text-black shadow-lg border border-black/10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.16, ease: MATERIAL_EASE }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✕
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Local CSS for starfield + subtle shine keyframes */}
        <style jsx global>{`
          .bg-stars {
            background: radial-gradient(
                  1px 1px at 20% 30%,
                  #ffffff90 50%,
                  transparent 51%
                )
                repeat,
              radial-gradient(
                  1px 1px at 80% 20%,
                  #ffffff70 50%,
                  transparent 51%
                )
                repeat,
              radial-gradient(
                  2px 2px at 60% 70%,
                  #ffffff40 50%,
                  transparent 51%
                )
                repeat;
            background-size: 300px 300px, 500px 500px, 800px 800px;
            background-position: 0 0, 0 0, 0 0;
            animation: stars 18s ease-in-out infinite;
          }
          @keyframes stars {
            0% {
              background-position: 0 0, 0 0, 0 0;
              opacity: 0.75;
            }
            50% {
              background-position: 50px 80px, -60px 40px, 40px -60px;
              opacity: 0.9;
            }
            100% {
              background-position: 0 0, 0 0, 0 0;
              opacity: 0.75;
            }
          }
          @keyframes aurora {
            0% {
              transform: translateY(-2%) rotate(0deg);
              filter: hue-rotate(0deg);
            }
            50% {
              transform: translateY(2%) rotate(2deg);
              filter: hue-rotate(15deg);
            }
            100% {
              transform: translateY(-2%) rotate(0deg);
              filter: hue-rotate(0deg);
            }
          }
          .animate-aurora {
            animation: aurora 20s ease-in-out infinite;
          }
          @keyframes shine {
            0% {
              transform: translateX(-120%) skewX(-20deg);
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            100% {
              transform: translateX(220%) skewX(-20deg);
              opacity: 0;
            }
          }
        `}</style>
      </motion.section>
    </MotionConfig>
  );
}
