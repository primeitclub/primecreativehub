import React from 'react';
import ShinyText from '../../animations/ShinyText/ShinyText';

interface HeroWordProps {
  word: string;
}

const HeroWord: React.FC<HeroWordProps> = ({ word }) => (
  <h1 className="flex items-center justify-center font-extrabold text-[ 40px] md:text-[5vw] sm:text-[5.6vw] xl:text-[4vw] 2xl:text-[72px]">
    <span className="flex items-baseline">
      <ShinyText 
      text={word}
      disabled={false}
      />
      <span className="inline-block text-[16px] md:text-[20px] xl:text-[24px] text-[#0797A0] ml-1">■</span>
    </span>
  </h1>
);

export default HeroWord;
