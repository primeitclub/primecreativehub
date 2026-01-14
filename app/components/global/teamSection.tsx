"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import SectionHeading from "../reusable/SectionHeading";
import Link from "next/link";
interface TeamMember {
  id: number;
  name: string;
  role: string;
  subRole: string;
  image: string;
  socials: { instagram?: string; github?: string; linkedin?: string };
}

interface TeamSectionProps {
  teamData: TeamMember[];
}

const TEAM: TeamMember[] = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  name: "Nirjala Shakya",
  role: "Creative Lead",
  subRole: "Backend Lead",
  image: "/images/mock-avatar.jpg",
  socials: { instagram: "#", github: "#", linkedin: "#" },
}));

export default function TeamSection({ teamData = TEAM }: TeamSectionProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const autoEnabledRef = useRef(true);
  const byCodeRef = useRef(false);
  const isReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth;
    byCodeRef.current = true;
    el.scrollTo({ left: i * cardWidth, behavior: "smooth" });
    window.setTimeout(() => (byCodeRef.current = false), 450);
  };

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    let interval: number | undefined;

    const start = () => {
      if (
        isReducedMotion ||
        paused ||
        !media.matches ||
        !autoEnabledRef.current
      )
        return;
      stop();
      interval = window.setInterval(() => {
        setIndex((prev) => {
          const next = (prev + 1) % teamData.length;
          scrollToIndex(next);
          return next;
        });
      }, 2000);
    };

    const stop = () => {
      if (interval) clearInterval(interval);
      interval = undefined;
    };

    const onMediaChange = () => {
      stop();
      setIndex(0);
      scrollToIndex(0);
      start();
    };

    start();
    media.addEventListener("change", onMediaChange);

    return () => {
      stop();
      media.removeEventListener("change", onMediaChange);
    };
  }, [paused, isReducedMotion]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!byCodeRef.current && autoEnabledRef.current) {
        autoEnabledRef.current = false;
        setPaused(true);
      }

      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const i = Math.floor(
          (el.scrollLeft + el.clientWidth * 0.5) / el.clientWidth
        );
        setIndex((prev) => (prev === i ? prev : i));
        ticking = false;
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="team" className="relative py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="relative mx-auto w-full 2xl:px-[17%] md:px-[8vw] lg:px-[8vw] px-[10%]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[56%] -z-10 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] blur-[160px] sm:h-[420px] sm:w-[620px] sm:blur-[200px] md:h-[520px] md:w-[820px] md:blur-[240px] lg:h-[620px] lg:w-[1080px] lg:blur-[280px] xl:min-w-[500px] sm:min-w[126px] bg-[#146B61]/80 rounded-full"
        />

        <SectionHeading text="The Amazing Team" spanIndex={3} />

        <div className="sm:hidden pt-8">
          <div
            ref={trackRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Team members"
            className="relative flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {teamData.map((m) => (
              <article
                key={m.id}
                className="min-w-full snap-center px-2 "
                aria-label={`${m.name}`}
              >
                <div className="group mx-auto flex h-full max-w-[480px] flex-col items-center justify-evenly rounded-[8px] bg-[#1C2727] text-white text-center shadow-md ring-1 ring-white/5 border border-[#0797A0] py-6">
                  <div className="relative mb-6">
                    <div className="relative h-24 w-24 sm:h-24 sm:w-24 md:h-25 md:w-25 lg:h-40 lg:w-40 2xl:h-56 2xl:w-56 overflow-hidden rounded-full ring-2 ring-white/20">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        className="h-full w-full object-cover scale-[1.5] mt-4"
                        priority={m.id <= 4}
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col items-center gap-1">
                    <h3 className="text-xl md:text-base lg:text-xl xl:text-[26px] 2xl:text-3xl">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-sm md:text-xs lg:text-base xl:text-[16px] font-medium 2xl:text-xl text-white/90">
                      {m.role}
                    </p>
                    <p className="italic mt-0.5 text-[12px] sm:text[14px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-base text-white/70">
                      {m.subRole}
                    </p>
                    <div className="mt-4 flex items-center gap-2 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-8">
                      <a
                        href={m.socials.instagram ?? "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#0797A0] "
                        aria-label={`${m.name} on Instagram`}
                      >
                        <BiLogoInstagramAlt className="h-6 w-6 md:h-6 md:w-6 lg:w-8 lg:h-8" />
                      </a>
                      <a
                        href={m.socials.github ?? "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#0797A0] "
                        aria-label={`${m.name} on GitHub`}
                      >
                        <FaGithub className="h-6 w-6 md:h-6 md:w-6 lg:w-8 lg:h-8" />
                      </a>
                      <a
                        href={m.socials.linkedin ?? "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#0797A0]"
                        aria-label={`${m.name} on LinkedIn`}
                      >
                        <FaLinkedin className="h-6 w-6 md:h-6 md:w-6 lg:w-8 lg:h-8" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {teamData.map((_, i) => {
              const active = i === index;
              return (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    setIndex(i);
                    scrollToIndex(i);
                  }}
                  className={[
                    "relative h-2 w-2 rounded-full transition-colors duration-300 ease-out",
                    "outline-none focus:ring-2 focus:ring-[#0797A0]/40",
                    active ? "bg-[#0797A0]" : "bg-white/70 hover:bg-white",
                  ].join(" ")}
                >
                  {/* subtle scale pulse for the active dot */}
                  <span
                    aria-hidden
                    className={[
                      "pointer-events-none absolute inset-0 rounded-full",
                      "transition-transform duration-300 ease-out",
                      active ? "scale-125" : "scale-100",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="hidden sm:grid pt-12 sm:pt-12 md:pt-16 lg:pt-18 xl:pt-22 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[780px] lg:max-w-[1000px] 2xl:max-w-[1240px] mx-auto gap-6 xl:gap-8 justify-center sm:justify-items-center ">
          {teamData.map((m) => (
            <article
              key={m.id}
              className="group flex flex-col items-center justify-evenly rounded-[8px] bg-[#1C2727] text-white text-center shadow-md ring-1 ring-white/5 border border-[#0797A0] py-4 sm:p-6 md:p-7 lg:px-2 lg:py-8 w-full sm:max-w-[400px]  mx-auto hover:scale-[1.05] transition-transform duration-150 ease-in "
            >
              <div className="relative mb-2 sm:mb-5 md:mb-7 lg:mb-10 xl:mb-10 2xl:mb-14 ">
                <div className="relative h-24 w-24 sm:h-24 sm:w-24 md:h-25 md:w-25 lg:h-40 lg:w-40 2xl:h-[220px] 2xl:w-[220px] overflow-hidden rounded-full ring-2 ring-white/20">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="h-full w-full object-cover scale-[1.5] mt-4"
                    priority={m.id <= 4}
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1">
                <h3 className="text-xl md:text-base lg:text-xl xl:text-[26px] 2xl:text-3xl">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm md:text-xs lg:text-base xl:text-[16px] font-medium 2xl:text-xl text-white/90">
                  {m.role}
                </p>
                <p className="italic mt-0.5 text-[12px] sm:text[14px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-base text-white/70">
                  {m.subRole}
                </p>
                <div className="mt-4 flex items-center gap-2 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-8">
                  <a
                    href={m.socials.instagram ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0797A0] hover:text-[#1eb5c0]"
                    aria-label={`${m.name} on Instagram`}
                  >
                    <BiLogoInstagramAlt className="h-6 w-6 md:h-6 md:w-6 lg:w-8 lg:h-8" />
                  </a>
                  <a
                    href={m.socials.github ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0797A0] hover:text-[#1eb5c0]"
                    aria-label={`${m.name} on GitHub`}
                  >
                    <FaGithub className="h-6 w-6 md:h-6 md:w-6 lg:w-8 lg:h-8" />
                  </a>
                  <a
                    href={m.socials.linkedin ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0797A0] hover:text-[#1eb5c0]"
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    <FaLinkedin className="h-6 w-6 md:h-6 md:w-6 lg:w-8 lg:h-8" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
