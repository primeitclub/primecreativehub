
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [active, setActive] = useState('home');

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'History', href: '/history' },
    { name: 'Team', href: '/team' },
  ];

  return (
    <nav
      className="fixed z-50 flex items-center bg-black/40 backdrop-blur-md shadow-md w-[90vw] max-w-[1000px] h-[60px] top-8 left-1/2 -translate-x-1/2 px-6 md:px-10 rounded-2xl gap-6 md:gap-8"
    >
      {/* Logo */}
      <div className="flex-shrink-0 ">
        <Link href="/">
          <Image
            src="/images/icon.svg"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Nav Items */}
      <div className="flex flex-grow justify-center gap-[40px]">
        {navItems.map(({ name, href }) => {
          const isActive = active === name.toLowerCase();
          return (
            <Link
              key={name}
              href={href}
              onClick={() => setActive(name.toLowerCase())}
              className={`relative cursor-pointer px-2 py-1 transition duration-300 text-lg font-medium
                ${
                  isActive
                    ? 'text-[#F8F8FF] font-semibold after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-cyan-400'
                    : 'text-[rgba(248,248,255,0.62)] hover:text-[#F8F8FF]'
                }
              `}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
