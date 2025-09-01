"use client";

import HeroSection from "./components/global/heroSection";
import About from "./components/global/about";
import History from "./components/global/history";
import Team from "./components/global/teamSection";
export default function Page() {
  return (
    <>
      <HeroSection />
      <About />
      <History />
      <Team />
    </>
  );
}
