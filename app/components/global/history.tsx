import React from "react";
import SectionHeading from "../reusable/SectionHeading";
import { Timeline } from "./timeline";

const timelineEvents = [
  {
    date: " 2019",
    title: "Creative Hub Founded",
    description:
      "Creative Hub founded with a vision to bring together artists and designers from around the world.",
  },
  {
    date: " 2024",
    title: "Creative Hub Reinitiated",
    description:
      "Creative Hub founded with a vision to bring together artists and designers from around the world.",
  },
  {
    date: " 2025",
    title: "Creative Hub Revamp",
    description:
      "Creative Hub founded with a vision to bring together artists and designers from around the world.",
  },
];

export default function History() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <SectionHeading
        text="Our Club History"
        spanIndex={2}
      />
      <Timeline events={timelineEvents} />
    </section>
  );
}
