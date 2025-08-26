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
      className="fixed 
      z-50 flex items-center bg-black/40 backdrop-blur-md 
      border border-white/30 shadow-md "
      style={{
        width: '650px',
        height: '40px',
        top: '10px',
        left: '110px',
        paddingLeft: '40px',
        paddingRight: '78.4px',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        gap: '24px',
      }}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src="/images/icon.svg"
            alt="Logo"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Nav Items */}
      <div className="flex flex-grow text-white text-sm font-medium justify-center" style={{ gap: '24px' }}>
        {navItems.map(({ name, href }) => {
          const isActive = active === name.toLowerCase();
          return (
            <Link
              key={name}
              href={href}
              onClick={() => setActive(name.toLowerCase())}
              className={`relative cursor-pointer px-2 py-1 transition duration-300 ${
                isActive
                  ? 'text-white font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
