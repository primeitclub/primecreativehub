'use client';
import React from 'react';

interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
}

export default function SocialIcon({ href, src, alt }: SocialIconProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        src={src}
        alt={alt}
        className="w-[30px] md:w-[4vw] lg:w-[2.2vw] 2xl:w-[40px] object-contain"
      />
    </a>
  );
}
