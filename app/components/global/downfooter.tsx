"use client";
import React from "react";
import Image from "next/image";
import SocialIcons from "../reusable/soical-icons";

export default function Downfooter() {
  return (
    <div className="text-center gap-0 flex max-w-[1920px] flex-col relative items-center">
      {/* <div className='w-full h-full absolute bg-[linear-gradient(180deg,#295D60_3.43%,#23C6C6_50.61%,#295D60_99.78%)]  z-10  '></div> */}
      <div className="text-white w-full mt-3">
        <SocialIcons />

        {/* Wrapper for text + fade overlay */}
        <div className=" flex flex-col relative  max-w-[1920px] items-center  ">
          {/* sm:text-[60px] md:text-[95px] lg:text-[160px] xl:text-[175px] */}
          <h1
            className="whitespace-nowrap  
                       leading-none font-extrabold 
                       text-[clamp(32px,12vw,175px)] 
                       bg-[linear-gradient(90deg,#295D60_3.43%,#23C6C6_50.60%,#295D60_95.78%)] 
                       bg-clip-text text-transparent relative z-1"
          >
            CREATIVE HUB
          </h1>

          {/* Fade effect only at bottom 10–15% */}
          {/* <div className="absolute bottom-0 left-0 w-full  h-[55%] bg-gradient-to-b from-black/0 to-black/100 z-20"></div> */}
          {/* <div className="absolute bottom-0 left-0 w-full  h-[55%]  bg-[linear-gradient(180deg,transparent_0.%,rgba(0,0,0,0.5)_70.61%,rgba(0,0,0,1)_95.78%)] z-20"></div> */}
        </div>
        <div className="absolute -bottom-2  md:bottom-3 md:blur-[20px] sm:blur-[18px]  lg:blur-[20px]  xl:blur-[27px] sm:-bottom-1 blur-[16px] xs:-bottom-1 left-0 w-full h-[45%] bg-[#020E0F] z-[100] "></div>

        {/* <div className="absolute bottom-0 left-0 w-full h-[55%] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.5)_40%,rgba(0,0,0,1)_100%)] z-[100]"></div> */}
      </div>
      {/* Footer copyright */}
      <div className="flex flex-row items-center relative justify-center  w-full h-full z-100">
        <div className=" xl:p-3 lg:p-3 md:p-2 sm:p-1 text-center justify-center flex relative w-full z-10 bg-black">
          <div
            className="absolute top-0 left-0 w-full h-[1px] 
              bg-[linear-gradient(91deg,#041213_20.35%,#23C6C6_50%,#041213_80.65%)] "
          ></div>
          <p className="text-[6px] sm:text-[10px] md:text-[10px] lg:text-[16px]  xl:text-[16px]">
            © 2025 Creative Hub. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
