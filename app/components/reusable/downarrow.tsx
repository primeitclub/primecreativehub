'use client';

import React from 'react';

type DropArrowProps = {
  size?: number;
  padding?: number;
  gap?: number;
  colorClass?: string;
  bgClass?: string;
  className?: string;
};

export default function DropArrow({
  size = 40,
  padding = 10,
  gap = 10,
  colorClass = 'text-cyan-500',
  bgClass = 'bg-[#1C2727] bg-opacity-70',
  className = '',
}: DropArrowProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full ${bgClass} ${className}`}
      style={{
        width: size,
        height: size,
        padding,
        gap,
        opacity: 1,
        transform: 'rotate(0deg)',
      }}
      aria-hidden="true"
    >
      <svg
        className={colorClass}
        width={size / 2}
        height={size / 2}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}   
        strokeLinecap="round"
        strokeLinejoin="round"
      >
       
        <line x1="12" y1="1" x2="12" y2="19" />
      
        <polyline points="6 12 12 18 18 12" />
      </svg>
    </span>
  );
}
