"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative w-5 h-5 cursor-pointer">
    <span
      className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
        isOpen ? "top-2.5 rotate-45" : "top-1"
      }`}
    />
    <span
      className={`absolute left-0 top-2.5 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
      }`}
    />
    <span
      className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
        isOpen ? "top-2.5 -rotate-45" : "top-4"
      }`}
    />
  </div>
);

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "History", href: "#history" },
    { name: "Team", href: "#team" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full top-0 transition-all duration-300 ${
        isScrolled
          ? "bg-white/5 backdrop-blur-md border border-white/30 shadow-lg"
          : "bg-transparent border-transparent py-2"
      } h-fit px-[5vw] lg:px-[9vw] xl:px-[12vw] md:px-[8vw]`}
    >
      <div className="max-w-[1280px] mx-auto h-full flex items-center relative">
        {/* Mobile view */}
        <div className="flex items-center justify-between w-full md:hidden">
          <div className="relative w-[53px] h-[53px] ">
            <Link href="/">
              <Image
                src="/images/CreativeHub.png"
                alt="Logo"
                fill
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>
          <button
            className="p-2 mr-2 transition-transform duration-200 hover:scale-110 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatedMenuIcon isOpen={isMenuOpen} />
          </button>
        </div>

        {/* Tablet view */}
        <div className="hidden md:flex lg:hidden w-full items-center justify-between ">
          {/* Logo */}
          <div className="relative w-[55px] h-[55px]">
            <Link href="/">
              <Image
                src="/images/CreativeHub.png"
                alt="Logo"
                fill
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Nav items */}
          <div className="flex gap-17.5">
            {navItems.map(({ name, href }) => {
              const isActive = active === name.toLowerCase();
              return (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setActive(name.toLowerCase())}
                  className={`relative cursor-pointer text-[20px] transition-colors duration-300 ${
                    isActive
                      ? "text-[#F8F8FF] font-semibold after:absolute after:-bottom-[4px] after:left-0 after:w-full after:h-[2px] after:bg-cyan-400"
                      : "text-[rgba(248,248,255,0.62)] hover:text-[#F8F8FF]"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden lg:flex w-full items-center justify-between">
          {/* Logo */}
          <div className="relative 2xl:w-[67px] 2xl:h-[83px] w-[50px] h-[60px]">
            <Link href="/">
              <Image
                src="/images/CreativeHub.png"
                alt="Logo"
                fill
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Nav Items  */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-12">
            {navItems.map(({ name, href }) => {
              const isActive = active === name.toLowerCase();
              return (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setActive(name.toLowerCase())}
                  className={`relative cursor-pointer px-1 py-1 transition duration-300 text-[16px] 2xl:text-[20px] ${
                    isActive
                      ? "text-[#F8F8FF] font-semibold after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[2px] after:bg-cyan-400"
                      : "text-[rgba(248,248,255,0.62)] hover:text-[#F8F8FF]"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 mt-2 md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen
            ? "max-h-80 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="py-6 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
          {navItems.map(({ name, href }, index) => {
            const isActive = active === name.toLowerCase();
            return (
              <Link
                key={name}
                href={href}
                onClick={() => {
                  setActive(name.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`block px-8 py-3 transition-all duration-300 text-lg font-medium transform hover:translate-x-2 hover:bg-white/5 ${
                  isActive
                    ? "text-[#F8F8FF] font-semibold border-l-2 border-cyan-400"
                    : "text-[rgba(248,248,255,0.62)] hover:text-[#F8F8FF]"
                } ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>

    
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
