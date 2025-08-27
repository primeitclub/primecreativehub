import React from 'react';
import ShinyText from "../../animations/ShinyText/ShinyText"

interface HeroWordProps {
  word: string;
}

const HeroWord: React.FC<HeroWordProps> = ({ word }) => (
  <h1 className="flex items-center justify-center font-extrabold text-[40px] md:text-[5vw] sm:text-[6vw] xl:text-[4.5vw] 2xl:text-[88px]">
    <span className="flex items-baseline">
      <ShinyText
        text={word}
        disabled={false}
        speed={3}
      />
      <span className="inline-block text-[12px] md:text-[14px] xl:text-[16px] text-[#0797A0] ml-1">■</span>
    </span>
  </h1>
);

export default HeroWord;
