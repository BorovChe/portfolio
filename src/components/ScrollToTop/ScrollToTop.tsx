'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import arrowTop from '../../../public/icons/ScrollToTop/arrowUp.svg';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-10 right-[30px] flex items-center justify-center w-[42px] h-[42px] bg-[--main-gray-bg-cl] rounded-full shadow-lg transition duration-500
          ${
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } lg:w-[68px] lg:h-[68px] lg:right-[50px] hover:bg-[#251c31] hover:duration-150 hover:ease-in`}
      >
        <Image className="w-6 lg:w-7" src={arrowTop} alt="Arrow to top" />
      </button>
    </>
  );
};

export default ScrollToTop;
