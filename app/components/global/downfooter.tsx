'use client'
import React from 'react'
import Image from 'next/image'
import SocialIcons from '../reusable/soical-icons'

export default function Downfooter() {
  return (
    <div className="text-center flex flex-col relative items-center">
      {/* <div className='w-full h-full absolute bg-[linear-gradient(180deg,#295D60_3.43%,#23C6C6_50.61%,#295D60_99.78%)]  z-10  '></div> */}
      <div className="text-white">
        <SocialIcons />

        {/* Wrapper for text + fade overlay */}
        <div className=" flex flex-col w-full items-center overflow-hidden">
          <h1
            className="whitespace-nowrap text-[45px] sm:text-[60px] md:text-[95px] lg:text-[160px] xl:text-[175px] 
                       leading-none font-extrabold 
                       bg-[linear-gradient(90deg,#295D60_3.43%,#23C6C6_50.61%,#295D60_99.78%)] 
                       bg-clip-text text-transparent relative z-9"
          >
            CREATIVE HUB
          </h1>

          {/* Fade effect only at bottom 10–15% */}
          <div className="absolute bottom-10 left-0 w-full h-[45%] bg-gradient-to-b from-transparent to-black/100 z-20"></div>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="flex flex-row items-center justify-center w-full h-full bg-black mt-4">
       
        <div className=" p-1 text-center z-10 bg-black">
          <p className='text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px]  '>© 2025 Creative Hub. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}
