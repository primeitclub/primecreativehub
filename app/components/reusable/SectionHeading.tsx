import React from 'react';

interface SectionHeadingProps {
  text: string;
  spanIndex?: number; // 1-based index
  highlightClassName?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, spanIndex = 1, highlightClassName = 'text-blue-500', className = '' }) => {
  const words = text.split(' ');
  return (
  <h2 className={`text-[32px] md:text-[44px] lg:text-[58px] 2xl:text-[64px] font-bold mb-4 text-center ${className}`}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className={idx === spanIndex - 1 ? highlightClassName : ''}
        >
          {word}{idx < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h2>
  );
};

export default SectionHeading;
