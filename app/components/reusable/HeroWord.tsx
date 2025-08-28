import React from 'react';

interface HeroWordProps {
  word: string;
}

const HeroWord: React.FC<HeroWordProps> = ({ word }) => (
  <h1 className="flex items-center justify-center font-extrabold text-[40px] md:text-[5vw] sm:text-[6vw] xl:text-[4.5vw] 2xl:text-[88px]">
    <span className="flex items-baseline">
      {word}
      <span className="inline-block text-[16px] md:text-[20px] xl:text-[24px] text-[#0797A0] ml-1">■</span>
    </span>
  </h1>
);

export default HeroWord;
