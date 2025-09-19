import React from 'react';
// import ShinyText from '../../animations/ShinyText/ShinyText';

interface HeroWordProps {
  word: string;
}

const HeroWord: React.FC<HeroWordProps> = ({ word }) => (
  <h1 className="flex items-center justify-center font-extrabold text-[40px] md:text-[44px] lg:text-[45px] xl:text-[52px] 2xl:text-[72px]">
    <span className="flex items-baseline">
      {/* <ShinyText 
      text={word}
      disabled={false}
      /> */}
      <span className="text-[#F8F8FF]">{word}</span>
      <span className="inline-block text-[12px] md:text-[14px] 2xl:text-[20px] text-[#0797A0] ml-1">■</span>
    </span>
  </h1>
);

export default HeroWord;
