'use client';
import React, { useEffect, useState } from 'react';

export default function ToTopArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const setVisibility = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button if scrolled more than 300px but not at the bottom
      const isAtBottom = scrollY + windowHeight >= documentHeight - 10; // 100px buffer from bottom
      
      if (scrollY > 300 && !isAtBottom) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', setVisibility);
    return () => window.removeEventListener('scroll', setVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 rounded-full flex items-center justify-center
                 bg-gradient-to-b from-[#0797A0] to-[#146B61] shadow-lg z-[120] hover:opacity-90
                 transition-all duration-300 hover:scale-110
                 w-12 h-12                                                                                                                                                                                                                                                                                                                   
                 p-3 md:p-2 lg:p-2
                 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                 `}
      aria-label="Scroll to top"
    >
      <img
        src="/images/top_arrow.svg"
        alt="Scroll to top arrow"
        className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 object-contain"
      />
    </button>
  );
}
