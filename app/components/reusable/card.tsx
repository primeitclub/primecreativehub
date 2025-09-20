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
  <div className={`${className} relative w-[34vw] sm:w-[30vw] md:w-[180px] lg:w-[220px] 2xl:w-[270px]`} >
      <div
        className={`group flex gap-[12px] md:gap-[16px] lg:gap-[30px] sm:flex-col flex-col items-center justify-center m-auto sm:w-full sm:h-full  relative overflow-hidden border border-[#0797A0] bg-[#1C2727] backdrop-blur-sm
      rounded-[16px] py-[6px] md:py-2 lg:py-[16px] 2xl:py-[25px] `}
      >
        {imageUrl && (
          <div className="relative flex w-auto h-auto  overflow-hidden">

            <div
              className='relative w-[80px] h-[40px] md:w-[120px] md:h-[60px] lg:w-[100px] lg:h-[50px] 2xl:w-[140px] 2xl:h-[70px]'
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
  <h3 className="lg:text-[18px] 2xl:text-[22px] sm:text-[18px] text-[12px] font-[600] text-center tracking-tight text-white">{title}</h3>
        {subtitle && <p className="text-center text-white/70 text-[10px] lg:text-[15px] 2xl:text-[17px]">{subtitle}</p>}
        </div>

        <div className="none" />
      </div>
    </div>
  )
}