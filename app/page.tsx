"use client"

import StartField from "./components/StartField";
import FlowingIcon from "./components/FlowingIcon";
import AnimatedText from "./components/AnimatedText";
import DownSvg from "./components/Down";
import { FaUsers, FaRegEye } from "react-icons/fa";
import Bubl from "./components/Bubl";

export default function Home() {
  return (
    <div className="min-h-screen py-12">
      <div className="px-[7vw]">


        <div className="absolute top-0 left-0 w-full h-fit z-0">
          <StartField />
        </div>

        <div className=" text-center h-[55vh] flex items-end justify-center relative z-10">

          <div className="relative leading-[0.8]" >

            <AnimatedText
              text="CREATIVE HUB"
              className="jery stroke-text tracking-loose text-[14vw] font-bold text-white/80  block"
            />

            <div className="absolute right-0 -top-[2vw]" >
              <div className="h-4 w-4 sm:h-6 sm:w-6 md:h-[1.1vw] md:w-[1.1vw]">
                 <Bubl/>
                </div>
            </div>

          </div>

          <div className="absolute bottom-[0vw] left-0 w-full h-[7%] z-10 bg-[#0B0B0B] ">
            <div className="w-full h-full grad"></div>
          </div>

        </div>

        {/* Content and Button Section */}
        <div className="flex flex-col items-center justify-between min-h-[35vh] relative z-10">

          <div className="flex flex-col justify-center items-center gap-6 h-auto" >

            <p className="text-[1.4vw] text-thin text-gray-300 mb-8 leading-relaxed flex items-center gap-2 pt-4">
              <span>We connect the dots</span>
              <span className="w-[4px] h-[4px] bg-white  animate-pulse"></span>
              <span>people</span>
              <span className="w-[4px] h-[4px] bg-white delay-2s animate-pulse"></span>
              <span>ideas</span>
              <span className="w-[4px] h-[4px] bg-white  animate-pulse"></span>
              <span>tools</span>
            </p>

            <div className="flex gap-6 mb-8">
              <button
                className="bg-white text-black px-8 py-2 rounded-lg text-[1.1vw] shadow transition-all duration-300 hover:bg-transparent hover:text-white hover:border hover:border-white hover:shadow-none hover:font-normal flex items-center gap-2"
              >
                <FaUsers size="1.3em" />
                Join Club
              </button>
              <button
                className="border border-white text-white px-8 py-2 rounded-lg text-[1.1vw] bg-transparent transition-all duration-300 hover:bg-white hover:text-black hover:shadow hover:font-semibold flex items-center gap-2"
              >
                <FaRegEye size="1.3em" />
                View Works
              </button>
            </div>

          </div>

          <div className="h-[2vw] w-[2vw]">
            <DownSvg />
          </div>
        </div>


      </div>
    </div>
  );
}
