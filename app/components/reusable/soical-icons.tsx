  'use client';
  import React from 'react';

  interface SocialIconProps {
    href: string;
    src: string;
    alt: string;
  }

  export default function SocialIcon({ href, src, alt, }: SocialIconProps) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={alt}
          className="w-[20px] sm:w-[24px] md:w-[26px] lg:w-[30px] 2xl:w-[40px] object-contain"
        />
      </a>
    );
  }
