'use client'

import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    // Show/hide scroll to top button based on scroll direction
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 bg-orange-500 text-white p-4 rounded-full shadow-md transition-opacity ${
        isVisible ? 'opacity-80' : 'opacity-0'
      } hover:opacity-100`}
      onClick={scrollToTop}
    >
        <ChevronUp className="h-8 w-8" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopButton;