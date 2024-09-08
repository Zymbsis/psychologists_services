import NavigationList from '../NavigationList/NavigationList';
import UserMenu from '../UserMenu/UserMenu';
import { icon } from 'img';
import css from './Header.module.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => setWindowSize(window.innerWidth));
  }, []);
  return (
    <header className={css.header}>
      <div className={`${css.container} container`}>
        <nav className={css.navigation}>
          <a
            className={css.logoLink}
            href='/'>
            <span>psychologists.</span>services
          </a>
          {windowSize >= 1440 && <NavigationList />}
        </nav>
        {windowSize >= 1440 && <UserMenu />}

        {windowSize < 1440 && (
          <button
            className={css.openMenuBtn}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            type='button'>
            <svg>
              <use
                href={`${icon}#${isMenuOpen ? 'icon-close' : 'icon-menu'}`}
              />
            </svg>
          </button>
        )}

        {isMenuOpen && (
          <div className={css.burgerMenu}>
            <NavigationList className={css.burgerNavList} />
            <UserMenu className={css.burgerUserMenu} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
