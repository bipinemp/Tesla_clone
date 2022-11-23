import { useEffect, useState } from "react";

/*  Custom Hook */
export const useWindowScrollPosition = () => {
  const [scroll, setScroll] = useState({
    scrollX: 0,
    scrollY: 0,
  });
  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
  }, []);
  const updateScrollPosition = () => {
    setScroll({ scrollX: window.scrollX, scrollY: window.scrollY });
  };
  return scroll;
};
