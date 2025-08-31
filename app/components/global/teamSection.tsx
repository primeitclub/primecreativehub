"use client";
import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
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
  image: "/images/mock-avatar.jpg", // ✅ correct path
  socials: { instagram: "#", github: "#", linkedin: "#" },
}));

export default function TeamSection() {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Blurred circle */}
        <div
          aria-hidden
          className="
            pointer-events-none absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 z-0
            h-[320px] w-[320px] blur-[200px]
            sm:h-[420px] sm:w-[420px] sm:blur-[240px]
            md:h-[520px] md:w-[520px] md:blur-[280px]
            lg:h-[620px] lg:w-[1020px] lg:blur-[320px]
            bg-[#146B61] rounded-full
          "
        />

        {/* Heading */}
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
                group flex min-h-[300px] flex-col items-center justify-center gap-2 rounded-[8px]
                bg-[#1C2727] p-5 text-center text-white shadow-md ring-1 ring-white/5
                sm:min-h-[320px] sm:p-6
                md:min-h-[340px] md:p-7
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:scale-105 hover:shadow-lg
              "
            >
              {/* Avatar */}
              <div className="relative mb-4 sm:mb-5">
                <div
                  className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28
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

              {/* Name & Roles */}
              <h3 className="text-base font-semibold sm:text-lg">{m.name}</h3>
              <p className="mt-1 text-sm text-gray-200 sm:text-base">
                {m.role}
              </p>
              <p className="text-[11px] italic text-gray-300 sm:text-xs">
                {m.subRole}
              </p>

              {/* Socials */}
              <div className="mt-4 flex items-center gap-4">
                <a
                  href={m.socials.instagram ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0797A0] transition transform hover:-translate-y-1"
                  aria-label={`${m.name} on Instagram`}
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href={m.socials.github ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0797A0] transition transform hover:-translate-y-1"
                  aria-label={`${m.name} on GitHub`}
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href={m.socials.linkedin ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0797A0] transition transform hover:-translate-y-1"
                  aria-label={`${m.name} on LinkedIn`}
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
