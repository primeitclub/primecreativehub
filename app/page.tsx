'use client';


import DropArrow from './components/reusable/downarrow';
import SecondaryHeader from './components/reusable/secondaryHeader';
import SocialIcons from './components/reusable/soical-icons';
import HeroWord from './components/reusable/HeroWord';
import Image from 'next/image';

export default function Page() {
  return (
    <div id="home" className="home_container relative h-[90vh] flex flex-col overflow-hidden "
    >

      <div className="flex flex-col items-center justify-center text-center flex-grow gap-2 2xl:gap-6">

        <div className="flex flex-col sm:flex-row items-center justify-center md:gap-4">
          
          {['Innovate', 'Build', 'Share', 'Repeat'].map(word => (
            <HeroWord key={word} word={word} />
          ))}

        </div>

        <div className="font-semibold text-[16px] md:text-[18px] lg:text-[1.9vw] 2xl:text-[36px] text-white ">
          WING OF PRIME IT CLUB
        </div>

        <div className="mt-4">
          <SocialIcons />
        </div>

      </div>

  {/* <DropArrow className="inline-flex p-[5px] gap-[5px] lg:p-[10px] lg:gap-[10px] items-center absolute top-[80%] sm:top-[82%] md:top-[85%] lg:top-[87%] left-1/2 -translate-x-1/2" /> */}

      {/* Slider */}
     <div className='absolute bottom-0 left-0' >
        <div className='relative' >
          <div className="overflow-hidden py-4 relative mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
            <div className="inline-flex gap-0 md:gap-12 lg:gap-16 text-white/80 whitespace-nowrap items-center animate-[marquee_20s_linear_infinite]">
              {Array.from({ length: 16 }).map((_, index) => (
                <span key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-[260px] leading-8">
                  <div className='relative w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8' >
                 <Image 
                  src="/images/icon.svg" 
                  alt="Logo" 
                  fill
                  className="flex  justify-center items-center aspect-square"
                 />
                </div>
              <span className='font-semibold text-[12px] lg:text-[18px] whitespace-nowrap'>
                Where Creativity Meets Innovation.
              </span>
            </span>
          ))}
        </div>
      </div>
      </div>
     </div>
     
      </div>

  );
}
