"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "../reusable/SectionHeading";
import { BiLogoInstagramAlt } from "react-icons/bi";
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
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div
          aria-hidden
          className="
            pointer-events-none absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 z-0
            h-[320px] w-[320px] blur-[200px]
            sm:h-[420px] sm:w-[620px] sm:blur-[240px]
            md:h-[520px] md:w-[820px] md:blur-[280px]
            lg:h-[620px] lg:w-[1080px] lg:blur-[320px]
            bg-[#146B61] rounded-full
          "
        />

        <SectionHeading
          text="The Amazing Team"
          spanIndex={3}
          highlightClassName="text-cyan-500"
        />

        <div
          className="pt-24 relative z-10 grid gap-5 sm:gap-6 md:gap-8
                     grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {TEAM.map((m) => (
            <article
              key={m.id}
              className="
                group flex min-h-[300px] flex-col items-center justify-center gap-8 rounded-[8px]
                bg-[#1C2727] p-5 text-center text-white shadow-md ring-1 ring-white/5
                sm:min-h-[320px] sm:p-6
                md:min-h-[440px] md:p-7
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:scale-105 hover:shadow-lg
              "
            >
              <div className="relative mb-4 sm:mb-5">
                <div
                  className="h-28 w-28 sm:h-24 sm:w-24 md:h-40 md:w-40
                             overflow-hidden rounded-full ring-2 ring-white/20
                             transition-transform duration-300 group-hover:scale-110"
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                    priority={m.id <= 4}
                  />
                </div>
              </div>
              <div className="flex flex-1 gap-2 flex-col items-center">
                <h3 className="text-3xl md:text-2xl sm:text-xl">{m.name}</h3>
                <p className="mt-1 text-2xl  sm:text-xl">{m.role}</p>
                <p className="text-[16px] italic  sm:text-[14px]">
                  {m.subRole}
                </p>

                <div className="mt-4 flex items-center gap-8">
                  <a
                    href={m.socials.instagram ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0797A0] transition transform hover:-translate-y-1"
                    aria-label={`${m.name} on Instagram`}
                  >
                    <BiLogoInstagramAlt className="h-10 w-10" />
                  </a>
                  <a
                    href={m.socials.github ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0797A0] transition transform hover:-translate-y-1"
                    aria-label={`${m.name} on GitHub`}
                  >
                    <FaGithub className="h-8 w-8" />
                  </a>
                  <a
                    href={m.socials.linkedin ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0797A0] transition transform hover:-translate-y-1"
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    <FaLinkedin className="h-8 w-8" />
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
