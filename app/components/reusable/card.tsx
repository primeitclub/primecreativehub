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
        group flex gap-[10px] flex-col items-center justify-center relative w-[250px] h-[250px] overflow-hidden p-[28px]
        border border-white/20 bg-[#1C2727] backdrop-blur-sm
        shadow-[0_0_24px_rgba(255,255,255,0.22)] rounded-[16px]
        hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]
        transition-all duration-300
      "
    >
      {imageUrl && (
        <div className="relative h-auto justify-center items-center gap-[10px] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={100}
            sizes="70vw"
            className="object-contain m-auto transition-transform duration-300 group-hover:scale-[1.05]"
          />
          {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30" ></div> */}
        </div>
      )}

      <div className="p-4">
        <h3 className="text-[22px] font-[600] text-center tracking-tight  text-white">{title}</h3>
        {subtitle && <p className="mt-1 text-[16px] text-center text-white/70">{subtitle}</p>}
        {children && <div className="mt-3">{children}</div>}
      </div>

     
    </div>
  )
}