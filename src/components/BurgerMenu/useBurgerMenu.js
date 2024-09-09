import { useEffect, useRef, useState } from 'react';

export const useBurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mainRef = useRef(null);

  const handleCloseMenu = (e) => {
    if (e.target !== e.currentTarget || e.code === 'Escape')
      setIsMenuOpen(false);
  };
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    mainRef.current = document.querySelector('main');
    window.addEventListener('keydown', handleCloseMenu);
    if (mainRef.current) {
      mainRef.current.addEventListener('click', handleCloseMenu);
    }
    return () => {
      window.removeEventListener('keydown', handleCloseMenu);
      if (mainRef.current) {
        mainRef.current.removeEventListener('click', handleCloseMenu);
      }
    };
  }, []);
  return [isMenuOpen, handleCloseMenu, handleToggleMenu];
};
