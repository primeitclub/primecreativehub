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

  // Softer glow, less spread
  const glowClass =
    "shadow-[0_0_10px_2px_rgba(7,151,160,0.6)] hover:shadow-[0_0_14px_4px_rgba(7,151,160,0.7)] transition-shadow duration-300"

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8">
      <div className="flex gap-2 sm:gap-4 md:gap-6">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div
              className={`bg-white/5 backdrop-blur-md border border-[#0797A0] rounded-lg px-4 py-[12px] sm:px-4 sm:py-3 md:px-6 md:py-4 min-w-[60px] sm:min-w-[80px] ${glowClass}`}
            >
              <div className="text-2xl sm:text-3xl md:text-[3vw] font-bold text-white leading-none">
                {item.value.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-xs sm:text-sm md:text-[1vw] text-gray-400 mt-1 sm:mt-2 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
