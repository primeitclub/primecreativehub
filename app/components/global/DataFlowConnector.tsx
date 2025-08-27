"use client"

import { motion } from "framer-motion"

interface DataFlowConnectorProps {
  /** Height of the animation container in pixels */
  height?: number
  /** Number of flowing particles */
  particleCount?: number
  /** Primary color for the glow effects (CSS color value) */
  primaryColor?: string
  /** Secondary color for subtle elements (CSS color value) */
  secondaryColor?: string
  /** Animation duration in seconds */
  animationDuration?: number
  /** Binary codes to display as floating elements */
  binaryCodes?: string[]
  /** Whether to show the central pulsing node */
  showCentralNode?: boolean
  /** Custom CSS class for the container */
  className?: string
}

export default function DataFlowConnector({
  height = 256,
  particleCount = 8,
  primaryColor = "rgba(255,255,255,0.8)",
  secondaryColor = "rgba(255,255,255,0.4)",
  animationDuration = 2,
  binaryCodes = ["01", "10", "11", "00"],
  showCentralNode = true,
  className = "",
}: DataFlowConnectorProps) {
  const containerStyle = {
    height: `${height}px`,
  }

  const gradientId = `flowGradient-${Math.random().toString(36).substr(2, 9)}`
  const glowId = `glow-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
      {/* Flowing Lines SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 400 ${height}`}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="50%" stopColor={primaryColor} />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </linearGradient>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main Flow Lines */}
        <motion.path
          d={`M200 20 Q150 ${height * 0.3} 200 ${height * 0.5} Q250 ${height * 0.7} 200 ${height - 20}`}
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          fill="none"
          filter={`url(#${glowId})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: animationDuration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d={`M180 20 Q120 ${height * 0.3} 180 ${height * 0.5} Q240 ${height * 0.7} 180 ${height - 20}`}
          stroke={secondaryColor}
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: animationDuration + 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.path
          d={`M220 20 Q280 ${height * 0.3} 220 ${height * 0.5} Q160 ${height * 0.7} 220 ${height - 20}`}
          stroke={secondaryColor}
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: animationDuration + 0.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>

      {/* Flowing Particles */}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: "50%",
            top: "10%",
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 10px ${primaryColor}`,
          }}
          animate={{
            y: [0, height * 0.8],
            x: [0, Math.sin(i) * 40, 0],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: animationDuration + 1,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central Data Node */}
      {showCentralNode && (
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full border-2 border-white/60"
          style={{
            boxShadow: `0 0 20px ${primaryColor}`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: animationDuration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Code Particles */}
      {binaryCodes.map((code, i) => (
        <motion.div
          key={code}
          className="absolute text-xs text-white/60 font-mono"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: [0, -10, 0],
          }}
          transition={{
            duration: animationDuration,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          {code}
        </motion.div>
      ))}
    </div>
  )
}
