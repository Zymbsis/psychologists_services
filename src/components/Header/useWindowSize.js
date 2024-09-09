import { useEffect, useRef, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const timeoutIdRef = useRef(null);
  useEffect(() => {
    const handleWindowSize = () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      timeoutIdRef.current = setTimeout(() => {
        setWindowSize(window.innerWidth);
      }, 300);
    };
    window.addEventListener('resize', handleWindowSize);
    return () => {
      window.removeEventListener('resize', handleWindowSize);
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);
  return windowSize;
};
