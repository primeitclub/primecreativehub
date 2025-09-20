import React from "react";
import SocialIcon from "../reusable/soical-icons";
import HeroWord from "../reusable/HeroWord";
import Image from "next/image";
import DropArrow from "../reusable/downarrow";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <div id="home" className="home_container relative h-[85vh] md:h-[100vh] flex flex-col overflow-hidden "
      >

        <div className='bg-grads absolute h-full w-[50%] left-0 top-0 z-10' ></div>
        <div className='bg-grads absolute h-full w-[50%] right-0 top-0 z-10 -scale-x-100' ></div>

        <div className='bg_top_graident z-10 absolute top-0 left-0 w-full h-full' ></div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center flex-grow md:gap-0 sm:gap-2 gap-4">

          <div className="flex flex-col sm:flex-row items-center justify-center md:gap-4">
            {['Innovate', 'Build', 'Share', 'Repeat'].map(word => (
              <HeroWord key={word} word={word} />
            ))}
          </div>

          <div className="font-semibold text-[16px] md:text-[18px] lg:text-[26px] 2xl:text-[32px] text-[#F8F8FF] sm:mt-2 md:mt-4 lg:mt-2 ">
            WING OF PRIME IT CLUB
          </div>

         <div className="flex items-center justify-center gap-4 sm:gap-4 lg:gap-9.5 sm:mt-2 md:mt-3.5 lg:mt-7">
            <SocialIcon href="https://www.instagram.com/prime_creative_hub" src="/images/insta.svg" alt="Instagram" />
            <SocialIcon href="https://github.com/primeitclub" src="/images/github.svg" alt="GitHub" />
            <SocialIcon href="https://www.linkedin.com/in/prime-creative-hub/" src="/images/linkden.svg" alt="LinkedIn" />
         </div>


        </div>

        {/* Slider */}
        {/* Infinite Marquee Effect */}
        <div className="absolute 2xl:bottom-0 -bottom-6 left-0 py-6 w-full ">
          <div className="relative z-20">
            <div className="overflow-hidden py-4 relative md:mt-6 lg:mt-8 xl:mt-10 w-full">
              <motion.div
                className="flex gap-0 md:gap-24 2xl:gap-50 text-white whitespace-nowrap items-center"
                style={{ minWidth: "200%", width: "200%" }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 22.9,
                  ease: "linear",
                }}
              >
                {[...Array(2)].map((_, loopIdx) => (
                  <React.Fragment key={loopIdx}>
                    {Array.from({ length: 18 }).map((_, index) => (
                      <span
                        key={loopIdx + "-" + index}
                        className="flex items-center gap-2 sm:gap-3 md:gap-2 2xl:gap-4 min-w-[260px] leading-8"
                      >
                        <div className="relative overflow-visible flex-shrink-0 w-[13px] h-[15px] sm:w-[13px] sm:h-[15px] md:w-[13px] md:h-[15px] lg:w-[27px] lg:h-[30px]">
                          <Image
                            src="/images/CreativeHub.png"
                            alt="Logo"
                            fill
                            sizes="24px"
                            className="object-contain"
                          />
                        </div>
                        <span className="font-semibold text-[12px] md:text-[18px] 2xl:text-[24px] whitespace-nowrap">
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
  );
}
