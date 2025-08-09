"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface Star {
    id: number
    x: number
    y: number
    size: number
    opacity: number
    duration: number
}

interface ShootingStar {
    id: number
    startX: number
    startY: number
    endX: number
    endY: number
    isVisible: boolean
}

export default function StartField() {
    const [stars, setStars] = useState<Star[]>([])
    const [shootingStar, setShootingStar] = useState<ShootingStar | null>(null)

    // Generate scattered stars on client side
    useEffect(() => {
        const starArray: Star[] = []
        const starCount = 45 // Scattered, not too many

        for (let i = 0; i < starCount; i++) {
            starArray.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 5 + 1, // 1-4px
                opacity: Math.random() * 0.6 + 0.3, // 0.3-0.9
                duration: Math.random() * 8 + 6, // 6-14 seconds
            })
        }

        setStars(starArray)
    }, [])


    // shotting stars
    useEffect(() => {
        const interval = setInterval(() => {
            // Generate random shooting star
            const startX = Math.random() * 100
            const startY = Math.random() * 50 // Start from upper half
            const endX = startX + (Math.random() * 60 + 40) * (Math.random() > 0.5 ? 1 : -1)
            const endY = startY + Math.random() * 40 + 20

            const newShootingStar: ShootingStar = {
                id: Date.now(),
                startX,
                startY,
                endX,
                endY,
                isVisible: true,
            }

            setShootingStar(newShootingStar)

            // Hide shooting star after animation
            setTimeout(() => {
                setShootingStar(null)
            }, 2000)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="stars_bg relative w-full h-[40vh] overflow-hidden">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                    }}
                    animate={{
                        x: [0, 10, -5, 8, 0], // Very subtle horizontal drift
                        y: [0, -8, 5, -3, 0], // Very subtle vertical drift
                        opacity: [star.opacity, star.opacity * 0.7, star.opacity * 1.2, star.opacity],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        repeatType: "loop",
                    }}
                />
            ))}
            {shootingStar && (
                <motion.div
                    key={shootingStar.id}
                    className="absolute"
                    style={{
                        left: `${shootingStar.startX}%`,
                        top: `${shootingStar.startY}%`,
                    }}
                    initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                    }}
                    animate={{
                        x: `${shootingStar.endX - shootingStar.startX}vw`,
                        y: `${shootingStar.endY - shootingStar.startY}vh`,
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                    }}
                >
                    {/* Main shooting star */}
                    <div className="w-2 h-2 bg-white rounded-full shadow-lg" />

                    {/* Trail effect */}
                    <motion.div
                        className="absolute top-0 left-0 w-1 h-1 bg-white/80 rounded-full"
                        animate={{
                            x: [0, -8, -16, -24],
                            y: [0, -4, -8, -12],
                            opacity: [0.8, 0.6, 0.3, 0],
                            scale: [1, 0.8, 0.6, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-0 left-0 w-1 h-1 bg-white/60 rounded-full"
                        animate={{
                            x: [0, -16, -32, -48],
                            y: [0, -8, -16, -24],
                            opacity: [0.6, 0.4, 0.2, 0],
                            scale: [0.8, 0.6, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-0 left-0 w-1 h-1 bg-white/40 rounded-full"
                        animate={{
                            x: [0, -24, -48, -72],
                            y: [0, -12, -24, -36],
                            opacity: [0.4, 0.2, 0.1, 0],
                            scale: [0.6, 0.4, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                        }}
                    />
                </motion.div>
            )}
        </div>
    )
}
