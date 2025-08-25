'use client';

import DropArrow from './components/reusable/downarrow';
import SecondaryHeader from './components/reusable/secondaryHeader';
import SocialIcons from './components/reusable/soical-icons';
import Image from 'next/image';

export default function Page() {
  return (
    <div
      id="home"
      className="relative h-screen 2xl:max-h-[1080px] flex flex-col overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 text-title font-display bg-[linear-gradient(180deg,_#020E0F_0%,_rgba(21,_21,_20,_0)_100%,_#020E0F_100%)]"
    >
      <div className="flex flex-col items-center justify-center text-center flex-grow px-2 sm:px-4 md:px-6 lg:px-8 bg-lime-500">
        <div className="hero-words-container">
          <h1 className="hero-word text-title font-display">
            <span className="flex items-baseline">
              Innovate
              <span className="inline-block text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18x] [color:#0797A0] ml-1">■</span>
            </span>
          </h1>
          
          <h1 className="hero-word text-title font-display">
            <span className="flex items-baseline">
              Build
              <span className="inline-block text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] [color:#0797A0] ml-1">■</span>
            </span>
          </h1>
          
          <h1 className="hero-word text-title font-display">
            <span className="flex items-baseline">
              Share
              <span className="inline-block text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] [color:#0797A0] ml-1">■</span>
            </span>
          </h1>
          
          <h1 className="bg-red-600 hero-word text-title font-display">
            <span className="flex items-baseline ">
              Repeat
              <span className="inline-block text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] [color:#0797A0] ml-1">■</span>
            </span>
          </h1>
        </div>

        <div className='!bg-red-500 !text-2xl !text-black' >
            this is testing 
        </div>

        <SecondaryHeader className="secondary-header mt-5 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 text-white px-2 sm:px-4">
          WING OF PRIME IT CLUB
        </SecondaryHeader>

        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16">
          <SocialIcons />
        </div>
      </div>

      <DropArrow className="down-arrow absolute top-[80%] sm:top-[82%] md:top-[85%] lg:top-[87%] left-1/2 -translate-x-1/2" />

      {/* Slider */}
      {/* <div className="marquee-wrapper mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
        <div className="marquee">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} className="marquee-item flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <Image 
                src="/images/icon.svg" 
                alt="Logo" 
                width={40} 
                height={40} 
                className="icon-responsive"
              />
              <span className='scrollable-text whitespace-nowrap'>
                Where Creativity Meets Innovation.
              </span>
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
}
