"use client";
import React from "react";
import Image from "next/image";
// import SocialIcons from "../reusable/soical-icons";
import SocialIcon from "../reusable/soical-icons";
export default function Downfooter() {
  return (
    <div className="text-center gap-0 flex max-w-[1920px] flex-col relative items-center">
      {/* <div className='w-full h-full absolute bg-[linear-gradient(180deg,#295D60_3.43%,#23C6C6_50.61%,#295D60_99.78%)]  z-10  '></div> */}
      <div className="text-white w-full mt-3">
        <div className="flex flex-row justify-center  gap-10 p-2">
          <SocialIcon
            href="https://instagram.com/primeitclub"
            src="/images/insta.svg"
            alt="Instagram"
          />
          <SocialIcon
            href="https://github.com/"
            src="/images/github.svg"
            alt="GitHub"
          />
          <SocialIcon
            href="https://linkedin.com/company/itclub"
            src="/images/linkden.svg"
            alt="LinkedIn"
          />
        </div>

        {/* Wrapper for text + fade overlay */}
        <div className=" flex flex-col relative items-center  ">
          {/* sm:text-[60px] md:text-[95px] lg:text-[160px] xl:text-[175px] */}
          <h1
            className="whitespace-nowrap  
                       leading-none font-extrabold 
                       text-[clamp(32px,12vw,236px)] 
                       bg-[linear-gradient(90deg,#295D60_3.43%,#23C6C6_50.60%,#295D60_95.78%)] 
                       bg-clip-text text-transparent relative z-1"
          >
            CREATIVE HUB
          </h1>

          {/* Fade effect only at bottom 10–15% */}
          {/* <div className="absolute bottom-0 left-0 w-full  h-[55%] bg-gradient-to-b from-black/0 to-black/100 z-20"></div> */}
          {/* <div className="absolute bottom-0 left-0 w-full  h-[55%]  bg-[linear-gradient(180deg,transparent_0.%,rgba(0,0,0,0.5)_70.61%,rgba(0,0,0,1)_95.78%)] z-20"></div> */}
        </div>
        <div className="absolute  bottom-[12%]  blur-[7px] sm:bottom-1 sm:blur-[15px] md:blur-[18px] md:bottom-1 lg:bottom-3 lg:blur-[25px]  xl:bottom-5  xl:blur-[35px]  left-0 w-full h-[25%] sm:h-[45%] bg-[#020E0F] z-[100] "></div>

        {/* <div className="absolute bottom-0 left-0 w-full h-[55%] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.5)_40%,rgba(0,0,0,1)_100%)] z-[100]"></div> */}
      </div>
      {/* Footer copyright */}
      <div className="flex flex-row items-center relative justify-center  w-full h-full z-100">
        <div className=" xl:p-3 lg:p-3 md:p-2 sm:p-1 text-center justify-center flex relative w-full z-10 bg-transparent">
          <div
            className="absolute top-0 left-0 w-full h-[0.7px] sm:h-[1px] 
              bg-[linear-gradient(91deg,#041213_20.35%,#23C6C6_50%,#041213_80.65%)] "
          >
            {" "}
          </div>
          <p className="text-[8px] p-0 mt-1 sm:text-[10px] sm:p-0 md:text-[14px] md:p2 lg:text-[15px] xl:p-3 xl:text-[20px]">
            © 2025 Creative Hub. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
