
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'History', href: '#history' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav
      className="relative z-50 flex items-center w-full h-[60px] pt-8 left-1/2 -translate-x-1/2 md:px-[10vw] px-[5vw] gap-6 md:gap-8"
    >
      {/* Logo */}
      <div className="relative w-[40px] h-[40px] md:w-[45px] md:h-[45px]">
        <Link href="/">
          <Image
            src="/images/icon.svg"
            alt="Logo"
            fill
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="ml-auto md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <HiX className="w-6 h-6 text-white" />
        ) : (
          <HiMenu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Desktop Nav Items */}
      <div className="hidden md:flex flex-grow justify-center gap-[40px]">
        {navItems.map(({ name, href }) => {
          const isActive = active === name.toLowerCase();
          return (
            <Link
              key={name}
              href={href}
              onClick={() => setActive(name.toLowerCase())}
              className={`relative cursor-pointer px-2 py-1 transition duration-300 2xl:text-lg text-sm font-medium
                ${
                  isActive
                    ? 'text-[#F8F8FF] font-semibold after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[2px] after:bg-cyan-400'
                    : 'text-[rgba(248,248,255,0.62)] hover:text-[#F8F8FF]'
                }
              `}
            >
              {name}
            </Link>
          );
        })}
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 py-4 bg-black/90 backdrop-blur-md rounded-lg md:hidden">
          {navItems.map(({ name, href }) => {
            const isActive = active === name.toLowerCase();
            return (
              <Link
                key={name}
                href={href}
                onClick={() => {
                  setActive(name.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`block px-6 py-2 transition duration-300 text-lg font-medium
                  ${
                    isActive
                      ? 'text-[#F8F8FF] font-semibold'
                      : 'text-[rgba(248,248,255,0.62)] hover:text-[#F8F8FF]'
                  }
                `}
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
