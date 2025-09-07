"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import SectionHeading from "../reusable/SectionHeading";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  subRole: string;
  image: string;
  socials: { instagram?: string; github?: string; linkedin?: string };
}

const TEAM: TeamMember[] = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  name: "Nirjala Shakya",
  role: "Creative Lead",
  subRole: "Backend Lead",
  image: "/images/mock-avatar.jpg",
  socials: { instagram: "#", github: "#", linkedin: "#" },
}));

export default function TeamSection() {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20">
      <div
        className="
          relative mx-auto w-full max-w-7xl
          px-6 sm:px-8 md:px-12 lg:px-16 xl:px-8
        "
      >
        <div
          aria-hidden
          className="
            pointer-events-none absolute left-1/2 top-[56%] -z-10 -translate-x-1/2 -translate-y-1/2
            h-[320px] w-[320px] blur-[160px]
            sm:h-[420px] sm:w-[620px] sm:blur-[200px]
            md:h-[520px] md:w-[820px] md:blur-[240px]
            lg:h-[620px] lg:w-[1080px] lg:blur-[280px]
            xl:min-w-[500px]
            bg-[#146B61]/50 rounded-full
          "
        />

        <SectionHeading
          text="The Amazing Team"
          spanIndex={3}
          highlightClassName="text-cyan-500"
        />

        <div
          className="
            pt-28 sm:pt-32 md:pt-36
            grid gap-6 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10
            grid-cols-2 md:grid-cols-3
          "
        >
          {TEAM.map((m) => (
            <article
              key={m.id}
              className="
                group flex flex-col items-center justify-center
                rounded-[8px] bg-[#1C2727] text-white text-center
                shadow-md ring-1 ring-white/5 border border-[#0797A0]
                p-5 sm:p-6 md:p-7 lg:p-8
                min-h-[260px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[420px] xl:min-h-[506px] 2xl:min-h-[506px]
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:scale-105 hover:shadow-lg
              "
            >
              <div className="relative mb-4 sm:mb-5 lg:mb-10 xl:mb-14 2xl:mb-14">
                <div
                  className="
                    h-24 w-24
                    sm:h-24 sm:w-24
                    md:h-28 md:w-28
                    lg:h-40 lg:w-40
                    xl:h-56 xl:w-56
                    2xl:h-56 2xl:w-56
                    overflow-hidden rounded-full ring-2 ring-white/20
                    transition-transform duration-300 group-hover:scale-110
                  "
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
                    priority={m.id <= 4}
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center">
                <h3 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
                  {m.name}
                </h3>

                <p className="mt-1 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-white/90">
                  {m.role}
                </p>

                <p className="italic mt-0.5 text-[13px] sm:text-[14px] md:text-base lg:text-base xl:text-base 2xl:text-base text-white/70">
                  {m.subRole}
                </p>

                <div className="mt-4 flex items-center gap-8 sm:gap-8 md:gap-8">
                  <a
                    href={m.socials.instagram ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0797A0] transition-transform hover:-translate-y-1"
                    aria-label={`${m.name} on Instagram`}
                  >
                    <BiLogoInstagramAlt className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
                  </a>
                  <a
                    href={m.socials.github ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0797A0] transition-transform hover:-translate-y-1"
                    aria-label={`${m.name} on GitHub`}
                  >
                    <FaGithub className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9" />
                  </a>
                  <a
                    href={m.socials.linkedin ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0797A0] transition-transform hover:-translate-y-1"
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    <FaLinkedin className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9" />
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
