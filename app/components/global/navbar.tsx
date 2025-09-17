"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative w-6 h-6 cursor-pointer">
    <span
      className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
        isOpen ? "top-3 rotate-45" : "top-1"
      }`}
    />
    <span
      className={`absolute left-0 top-3 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
      }`}
    />
    <span
      className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
        isOpen ? "top-3 -rotate-45" : "top-5"
      }`}
    />
  </div>
)

export default function Navbar() {
  const [active, setActive] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "History", href: "#history" },
    { name: "Team", href: "#team" },
  ]

    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (

     <nav
      className={`fixed z-50 flex items-center w-full h-[64px] sm:h-[64px] md:h-[72px] lg:h-[80px] pt-8 left-1/2 -translate-x-1/2 md:px-[10vw] px-[5vw] gap-6 md:gap-8 transition-all duration-300 
        ${
          isScrolled
            ? "bg-white/5 backdrop-blur-md border border-white/30 shadow-lg"
            : "bg-transparent border-transparent"
        }
      `}
    >

   {/* <nav className="fixed z-50 flex items-center w-full h-[70px] pt-8 left-1/2 -translate-x-1/2 md:px-[10vw] px-[5vw] gap-6 md:gap-8 bg-[rgba(0,0,0,0)] backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
    
      
      {/* Logo */}
      <div className="relative w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] md:w-[42px] md:h-[42px] lg:w-[50px] lg:h-[50px] -translate-y-4 sm:-ml-0 md:ml-0 lg:ml-10">
        <Link href="/">
          <Image src="/images/icon.svg" alt="Logo" fill className="object-contain cursor-pointer" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="ml-auto md:hidden p-2 -m-2 transition-transform duration-200 hover:scale-110 active:scale-95 -translate-y-4 mr-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <AnimatedMenuIcon isOpen={isMenuOpen} />
      </button>

      {/* Desktop Nav Items */}
      <div className="hidden md:flex flex-grow justify-center gap-[48px] -translate-y-4 ml-9">
        {navItems.map(({ name, href }) => {
          const isActive = active === name.toLowerCase()
          return (
            <Link
              key={name}
              href={href}
              onClick={() => setActive(name.toLowerCase())}
              className={`relative cursor-pointer px-1 py-1 transition duration-300 text-[20px]
                ${
                  isActive
                    ? "text-[#F8F8FF] font-semibold after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[2px] after:bg-cyan-400"
                    : "text-[rgba(248,248,255,0.62)] hover:text-[#F8F8FF]"
                }
              `}
            >
              {name}
            </Link>
          )
        })}
      </div>

      <div
        className={`absolute top-20 left-0 right-0 mt-2 md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? "max-h-80 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="py-6 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
          {navItems.map(({ name, href }, index) => {
            const isActive = active === name.toLowerCase()
            return (
              <Link
                key={name}
                href={href}
                onClick={() => {
                  setActive(name.toLowerCase())
                  setIsMenuOpen(false)
                }}
                className={`block px-8 py-3 transition-all duration-300 text-lg font-medium transform hover:translate-x-2 hover:bg-white/5 ${
                  isActive
                    ? "text-[#F8F8FF] font-semibold border-l-2 border-cyan-400 "
                    : "text-[rgba(248,248,255,0.62)] hover:text-[#F8F8FF]"
                } ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                {name}
              </Link>
            )
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
  )
}
