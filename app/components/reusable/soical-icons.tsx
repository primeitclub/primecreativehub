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
          className="w-[20px] sm:w-[24px] md:w-[20px] lg:w-[25px] 2xl:w-[35px] object-contain"
        />
      </a>
    );
  }
