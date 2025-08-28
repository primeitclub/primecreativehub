"use client"

import type React from 'react'
import Image from 'next/image'

type CardProps = {
  title: string
  subtitle?: string
  imageUrl?: any
  className?: string,
}

export default function Card({ title, subtitle, imageUrl, className,  }: CardProps) {
  return (
    <div className={`${className} relative w-[140px] sm:w-[30vw] lg:w-[270px] 2xl:w-[276px]`} >
      <div
        className={` group flex gap-[12px] md:gap-[30px] sm:flex-col flex-col items-center justify-center m-auto sm:w-full sm:h-full  relative overflow-hidden border border-white/20 bg-[#1C2727] backdrop-blur-sm
      shadow-[0_0_24px_rgba(255,255,255,0.22)] rounded-[16px]
      hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]
      transition-all duration-300 py-[15px] `}
      >
        {imageUrl && (
          <div className="relative flex w-auto h-auto  overflow-hidden">

            <div
              className='relative w-[80px] h-[40px] md:w-[120px] md:h-[60px] lg:w-[160px] lg:h-[80px]'
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-contain "
              />
            </div>
            {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30" ></div> */}
          </div>
        )}

         
        <div className='' >
        <h3 className="lg:text-[24px] sm:text-[18px] text-[12px] font-[600] text-center tracking-tight text-white">{title}</h3>
        {subtitle && <p className="text-center text-white/70 text-[12px] sm:text-[19px]">{subtitle}</p>}
        </div>

        <div className="none" />
      </div>
    </div>
  )
}