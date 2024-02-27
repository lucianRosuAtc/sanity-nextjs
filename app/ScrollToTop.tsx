"use client";

import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";

export const ScrollToTop = () => {
  const [isVisable, setIsVisable] = useState(false);
  let lastScrollPos = 0;
  const className = (...classes: any[]) => {
    return classes.filter(Boolean).join("");
  };
  const toggleVisibility = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < lastScrollPos && currentScrollPos > 100) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }

    lastScrollPos = currentScrollPos;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-[170px] right-[15px] z-10">
      {isVisable ? (
        <button
          type="button"
          onClick={scrollToTop}
          className={className(
            isVisable ? "opacity-100" : "opacity-0 ",
            " flex items-center justify-center w-[60px] h-[60px] shadow-sm text-white bg-black opacity-50 transition-all hover:bg-primary focus:outline-none rounded-lg"
          )}
          aria-label="Right Align"
        >
          <FaIcons.FaChevronCircleUp className="h-6 w-6" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
};
