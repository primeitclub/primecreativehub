'use client';

import PrimaryHeader from '../components/reusable/primaryHeader';
import SecondaryHeader from '../components/reusable/secondaryHeader';
import SocialIcons from '../components/reusable/soical-icons';
import Image from 'next/image';

export default function HeroSection() {
  return (
      //      <div
      //   id="home"
      //   className="relative h-screen 2xl:max-h-[1080px] flex flex-col overflow-hidden px-6 py-8 text-title font-display bg-[linear-gradient(180deg,_#020E0F_0%,_rgba(21,_21,_20,_0)_100%,_#020E0F_100%)]"
      // >

      <div
        id="home"
        className="relative h-screen 2xl:max-h-[1080px] flex flex-col overflow-hidden px-6 py-8 text-title font-display"
        style={{
          background: 'linear-gradient(180deg, #020E0F 0%, rgba(21, 21, 20, 0) 100%, #020E0F 100%)',
        }}
      >

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center flex-grow">
       <PrimaryHeader className="text-[90px] sm:text-[130px] md:text-[160px] lg:text-[180px] font-black text-title">
          Innovate
          {/* <span className="inline-block text-[14px] relative top-[-1px] mx-2">■</span>{' '} */}
          <span className="inline-block text-[18px] [color:#0797A0] relative top-[-1px] mx-2">■</span>{' '}
          Build
          <span className="inline-block text-[18px] [color:#0797A0] relative top-[-1px] mx-2">■</span>{' '}
          Share
          <span className="inline-block text-[18px] [color:#0797A0] relative top-[-1px] mx-2">■</span>{' '}
          Repeat
          <span className="inline-block text-[18px] [color:#0797A0] relative top-[-1px] mx-2">■</span>
        </PrimaryHeader>

        <SecondaryHeader className="mt-10 text-[30px] md:text-xl font-semibold text-white">
          WING OF PRIME IT CLUB
        </SecondaryHeader>

      
        <SocialIcons />
      </div>

      {/* Slider */}
       <div className="marquee-wrapper">
        <div className="marquee">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} className="marquee-item">
              <Image src="/images/icon.svg" alt="Logo" width={20} height={20} />
              <span className='text-[20px]'> Where Creativity Meets Innovation.  </span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
