import React from "react";
import SectionHeading from "../reusable/SectionHeading";
import { Timeline } from "./timeline";

const timelineEvents = [
  {
    date: " 2019/20",
    title: "Creative Hub Founded",
    description:
      "Creative Hub founded with a vision to bring together artists and designers from around the world.",
  },
  {
    date: " 2024/25",
    title: "Creative Hub Reinitiated",
    description:
      "After a necessary pause, our community's resilient spirit reignited stronger than ever in 2024.",
  },
  {
    date: " 2025/26",
    title: "Creative Hub Revamp",
    description:
      "We proudly unveiled a bold new creative identity and platform to empower future creativity in 2025.",
  },
];

export default function History() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <SectionHeading
        text="How We Got Here"
        spanIndex={1}
      />
      <Timeline events={timelineEvents} />
    </section>
  );
}
