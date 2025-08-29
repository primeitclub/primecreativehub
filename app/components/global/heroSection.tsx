
import React from 'react'
import SocialIcons from '../reusable/soical-icons'
import HeroWord from '../reusable/HeroWord'
import Image from 'next/image'
import DropArrow from '../reusable/downarrow'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
   <>
      <div id="home" className="home_container relative h-[100vh] flex flex-col overflow-hidden "
    >

      <div  className='bg-grads absolute h-full w-[50%] left-0 top-0 z-10' ></div>
      <div  className='bg-grads absolute h-full w-[50%] right-0 top-0 z-10 -scale-x-100' ></div>

      <div className='bg_top_graident z-10 absolute top-0 left-0 w-full h-full' ></div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center flex-grow gap-2 2xl:gap-4">

         <div className="flex flex-col sm:flex-row items-center justify-center md:gap-4">
          {['Innovate', 'Build', 'Share', 'Repeat'].map(word => (
            <HeroWord key={word} word={word} />
          ))}
        </div>

        <div className="font-semibold text-[16px] md:text-[18px] lg:text-[1.9vw] 2xl:text-[32px] text-[#F8F8FF] ">
          WING OF PRIME IT CLUB
        </div>

        <div className="mt-2">
          <SocialIcons />
        </div>

      </div>

      {/* Slider */}
     {/* Infinite Marquee Effect */}
     <div className='absolute bottom-0 left-0 py-6 w-full' >
       <div className='relative z-20'>
         <div className="overflow-hidden py-4 relative mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 w-full">
           <motion.div
             className="flex gap-0 md:gap-12 lg:gap-16 text-white whitespace-nowrap items-center"
             style={{ minWidth: '200%', width: '200%' }}
             animate={{ x: ["0%", "-50%"] }}
             transition={{ repeat: Infinity, duration: 22.9 , ease: "linear" }}
           >
             {[...Array(2)].map((_, loopIdx) => (
               <React.Fragment key={loopIdx}>
                 {Array.from({ length: 18 }).map((_, index) => (
                   <span key={loopIdx + '-' + index} className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-[260px] leading-8">
                     <div className='relative w-6 h-6 overflow-visible flex-shrink-0'>
                       <Image 
                         src="/images/icon.svg" 
                         alt="Logo" 
                         fill
                         sizes="24px"
                         className="object-contain"
                       />
                     </div>
                     <span className='font-semibold text-[12px] lg:text-[16px] whitespace-nowrap'>
                       Where Creativity Meets Innovation.
                     </span>
                   </span>
                 ))}
               </React.Fragment>
             ))}
           </motion.div>
         </div>
       </div>
     </div>
     
      </div>
    
    </>
  )
}
