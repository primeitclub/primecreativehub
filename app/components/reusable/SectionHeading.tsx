import React from "react";

interface SectionHeadingProps {
  text: string;
  spanIndex?: number | number[];
  highlightClassName?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  text,
  spanIndex = 1,
  highlightClassName = "text-[#0797A0]",
  className = "",
}) => {
  const highlightIndices = Array.isArray(spanIndex) ? spanIndex : [spanIndex];

  // Split text by lines
  const lines = text.split("\n");

  let globalWordIdx = 0;

  return (
    <h2
      className={`text-[24px] md:text-[28px] lg:text-[40px] 2xl:text-[50px] font-bold mb-4 text-center ${className}`}
    >
      {lines.map((line, lineIdx) => {
        const words = line.trim().split(" ");

        return (
          <div key={lineIdx}>
            {words.map((word, wordIdx) => {
              globalWordIdx += 1;
              const isHighlighted = highlightIndices.includes(globalWordIdx);

              return (
                <span
                  key={`${lineIdx}-${wordIdx}`}
                  className={isHighlighted ? highlightClassName : ""}
                >
                  {word}
                  {wordIdx < words.length - 1 ? " " : ""}
                </span>
              );
            })}
          </div>
        );
      })}
    </h2>
  );
};

export default SectionHeading;
