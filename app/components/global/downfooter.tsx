'use client'
import React from 'react'
import Image from 'next/image'
import copyright from '../../../public/images/copyRight.svg'
import SocialIcons from '../reusable/soical-icons'



export default function Downfooter() {
  return (
    <div className='text-center flex flex-col items-center'>
      <div className="text-white">
        <SocialIcons />
      </div> 
      <h1 className='text-[180px] leading-none  font-extrabold bg-[linear-gradient(180deg,#0C646A_14.43%,#47F3F3_46.19%,#000_89.86%)] bg-clip-text text-transparent'>CREATIVE HUB</h1>
      <div className='flex flex-row gap-2 text-center justify-center items-center w-full h-[40px] '>
        <div className='flex relative w-[12px] h-[12px] flex-row bg-black '>
          <Image src='/images/copyRight.svg'
                alt="Copyright" fill className='object-contain' />
          
        </div>
      <div className='text-[16px] p-2 text-center'><p className='text-[12px] '>2025 Creative Hub. All rights reserved</p></div>

        
      </div>
      
    </div>

  )
}