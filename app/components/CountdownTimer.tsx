"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        // Set target date to 1 month from now
        const targetDate = new Date()
        targetDate.setMonth(targetDate.getMonth() + 1)

        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex gap-2 sm:gap-4 md:gap-6">

                <div className="flex flex-col items-center">
                    <div className="bg-white/5 backdrop-blur-md border border-white/30 rounded-lg px-4 py-[12px] sm:px-4 sm:py-3 md:px-6 md:py-4 min-w-[60px] sm:min-w-[80px] shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-shadow duration-300">
                        <div className="text-2xl sm:text-3xl md:text-[3vw] font-bold text-white leading-none drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                            {timeLeft.days.toString().padStart(2, "0")}
                        </div>
                    </div>
                    <div className="text-xs sm:text-sm md:text-[1vw] text-gray-400 mt-1 sm:mt-2 uppercase tracking-wider">
                        Days
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="bg-white/5 backdrop-blur-md border border-white/30 rounded-lg px-4 py-[12px] sm:px-4 sm:py-3 md:px-6 md:py-4 min-w-[60px] sm:min-w-[80px] shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-shadow duration-300">
                        <div className="text-2xl sm:text-3xl md:text-[3vw] font-bold text-white leading-none drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                            {timeLeft.hours.toString().padStart(2, "0")}
                        </div>
                    </div>
                    <div className="text-xs sm:text-sm md:text-[1vw] text-gray-400 mt-1 sm:mt-2 uppercase tracking-wider">
                        Hours
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="bg-white/5 backdrop-blur-md border border-white/30 rounded-lg px-4 py-[12px] sm:px-4 sm:py-3 md:px-6 md:py-4 min-w-[60px] sm:min-w-[80px] shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-shadow duration-300">
                        <div className="text-2xl sm:text-3xl md:text-[3vw] font-bold text-white leading-none drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                            {timeLeft.minutes.toString().padStart(2, "0")}
                        </div>
                    </div>
                    <div className="text-xs sm:text-sm md:text-[1vw] text-gray-400 mt-1 sm:mt-2 uppercase tracking-wider">
                        Minutes
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="bg-white/5 backdrop-blur-md border border-white/30 rounded-lg px-4 py-[12px] sm:px-4 sm:py-3 md:px-6 md:py-4 min-w-[60px] sm:min-w-[80px] shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-shadow duration-300">
                        <div className="text-2xl sm:text-3xl md:text-[3vw] font-bold text-white leading-none drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                            {timeLeft.seconds.toString().padStart(2, "0")}
                        </div>
                    </div>
                    <div className="text-xs sm:text-sm md:text-[1vw] text-gray-400 mt-1 sm:mt-2 uppercase tracking-wider">
                        Seconds
                    </div>
                </div>
            </div>
        </div>
    )
}
