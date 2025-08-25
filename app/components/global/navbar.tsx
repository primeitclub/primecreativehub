
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
      className="fixed z-50 flex items-center bg-black/40 backdrop-blur-md  shadow-md"
      style={{
        width: '1000px',
        height: '60px',
        top: '30px',
        left: '400px',
        paddingLeft: '40px',
        paddingRight: '78.4px',
        borderRadius: '20px',
        gap: '24px',
      }}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
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
      <div className="flex flex-grow justify-center" style={{ gap: '40px' }}>
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
