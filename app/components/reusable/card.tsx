"use client"

import type React from 'react'
import Image, { StaticImageData } from 'next/image'

type CardProps = {
  title: string
  subtitle?: string
  imageUrl?: any
  children?: React.ReactNode
}

export default function Card({ title, subtitle, imageUrl, children }: CardProps) {
  return (
    <div
      className="
        group relative w-[286px] h-[286px] overflow-hidden p-[28px]
        border border-white/20 bg-[#1C2727] backdrop-blur-sm
        shadow-[0_0_24px_rgba(255,255,255,0.22)] rounded-[16px]
        hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]
        transition-all duration-300
      "
    >
      {imageUrl && (
        <div className="relative h-40 justify-center items-center w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
          
            sizes="100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30" />
        </div>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold tracking-tight text-4xl text-white">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-white/70">{subtitle}</p>}
        {children && <div className="mt-3">{children}</div>}
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />
    </div>
  )
}