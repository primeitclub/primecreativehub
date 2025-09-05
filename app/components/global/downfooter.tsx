'use client'
import React from 'react'
import Image from 'next/image'
import copyright from '../../../public/images/copyRight.svg'
import SocialIcons from '../reusable/soical-icons'



export default function Downfooter() {
  
  return (
    <div className='text-center  flex flex-col items-center '>
      
      <div className="text-white">
        <SocialIcons />
      </div> 
      <div className=' w-full h-full relative after:content-[" "] after:absolute after:w-full after:bottom-0 after:left-0 after:h-1/3 after:bg-[linear-gradient(90deg,#295D60_1.43%,,#0000_99.78%)]  after:z-[9] '>
      <h1 className="text-[45px] z-0 relative sm:text-[60px] md:text-[95px] lg:text-[180px] leading-none font-extrabold bg-[linear-gradient(90deg,#295D60_3.43%,#23C6C6_50.61%,#295D60_99.78%)] flex-grow-1 bg-clip-text text-transparent 
      ">
      CREATIVE HUB
      </h1>
      
      </div>
      


      
      



      
      <div className='flex flex-row items-center justify-center'>
      <div className='flex relative w-[12px] h-[12px] flex-row bg-black '>
          <Image src='/images/copyRight.svg'
                alt="Copyright" fill className='object-contain' />
          
        </div>
        <div className='text-[16px] p-2 text-center z-index-[10]'><p className='text-[12px] '>2025 Creative Hub. All rights reserved  </p></div>
      </div>
      
    </div>

  )
}