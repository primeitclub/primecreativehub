'use client';
import React, { useEffect, useState } from 'react';

export default function ToTopArrow() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const setVisibility = () => {
//       if (window.scrollY > 300) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     };
//     window.addEventListener('scroll', setVisibility);
//     return () => window.removeEventListener('scroll', setVisibility);
//   }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`   absolute  rounded-full items-center 
                 bg-gradient-to-b from-[#0797A0] to-[#146B61] shadow-lg z-50 hover:opacity-90
                 transition
                 2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 md:w-8 md:h-8  sm:w-7 sm:h-7 w-5 h-5
                 2xl:bottom-80 2xl:right-25 xl:bottom-65 xl:right-18 lg:bottom-55 lg:right-18 md:bottom-40 md:right-13 sm:bottom-30 sm:right-9  bottom-25 right-5 
                 xl:p-3 lg:p-2.5 md:p-2 sm:p-1.5 p-1
                 `}
                //  ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} add incase 
      aria-label="Scroll to top"
    >
      <img
        src="/images/top_arrow.svg"
        alt="Scroll to top arrow"
        className="w-2 sm:w-2 md:w-3 lg:w-4 xl:w-6  2xl:w-7 object-contain"
      />
    </button>
  );
}
