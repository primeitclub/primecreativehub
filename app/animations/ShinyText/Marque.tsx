
import React from "react";
import { motion } from "framer-motion";

type MarqueeProps = {
  children: React.ReactNode;
  duration?: number;
};

export const SimpleMarquee: React.FC<MarqueeProps> = ({ children, duration = 20 }) => {
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <motion.div
        className="marquee"
        style={{ display: "inline-flex", whiteSpace: "nowrap" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear"
        }}
      >
        <div style={{ display: "inline-flex" }}>{children}</div>
        <div style={{ display: "inline-flex" }}>{children}</div>
      </motion.div>
    </div>
  );
};
