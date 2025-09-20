"use client";

import HeroSection from "./components/global/heroSection";
import About from "./components/global/about";
import History from "./components/global/history";
import TeamSectionWrapper from "./components/global/TeamSectionWrapper";
export default function Page() {
  return (
    <>
      <HeroSection />
      <About />
      <History />
      <TeamSectionWrapper />
    </>
  );
}
