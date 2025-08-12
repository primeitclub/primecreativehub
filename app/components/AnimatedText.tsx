"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
    text: string
    className?: string
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
    const letters = text.split("")

    return (
        <span className={`${className} group`}>
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20, fill: 'red', stroke: 'none' }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "easeOut"
                    }}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 }
                    }}
                    className="inline-block cursor-pointer hover:text-white hover:stroke-text-hover"
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </span>
    )
} 