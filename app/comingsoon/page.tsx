"use client"

import StartField from "../components/StartField";
import AnimatedText from "../components/AnimatedText";
import FlowingIcon from "../components/FlowingIcon";
import DownSvg from "../components/Down";
import CountdownTimer from "../components/CountdownTimer";
import Bulp from "../components/Bubl";

export default function Home() {
    return (
        <div className="min-h-screen bg-black py-6 sm:py-8 md:py-12">
            <div className="px-4 sm:px-6 md:px-[7vw]">

                <div className="absolute top-0 left-0 w-full h-fit z-0">
                    <StartField />
                </div>

                <div className="text-center h-[40vh] sm:h-[50vh] md:h-[55vh] flex items-end justify-center relative z-10">

                    <div className="relative leading-[0.8]">

                        <AnimatedText
                            text="COMING SOON"
                            className="jery stroke-text tracking-loose text-6xl sm:text-8xl md:text-[14vw] font-bold text-white block"
                        />

                        <div className="hidden md:block absolute right-0 -top-2 sm:-top-4 md:-top-[2vw]">
                            <div className="h-4 w-4 sm:h-6 sm:w-6 md:h-[1.5vw] md:w-[1.5vw]">
                                <Bulp />
                            </div>
                        </div>

                    </div>

                    <div className="hidden md:block absolute bottom-[0vw] left-0 w-full h-[10%] z-10 bg-gray-500">
                        <div className="w-full h-full grad"></div>
                    </div>

                </div>

                {/* Countdown Timer Section */}
                <div className="flex flex-col items-center justify-center min-h-[30vh] sm:min-h-[35vh] relative z-10">
                    <CountdownTimer />

                    {/* <div className="mt-8 sm:mt-10 md:mt-12 h-6 w-6 sm:h-8 sm:w-8 md:h-[2vw] md:w-[2vw]">
                        <DownSvg />
                    </div> */}
                </div>

            </div>
        </div>
    );
}
