import { useWindowSize } from './useWindowSize';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NavigationList from '../NavigationList/NavigationList';
import UserMenu from '../UserMenu/UserMenu';
import css from './Header.module.css';

const Header = () => {
  const windowSize = useWindowSize();

  return (
    <header className={css.header}>
      <div className={`${css.container} container`}>
        {windowSize < 1440 && (
          <>
            <a
              className={css.logoLink}
              href='/'>
              <span>psychologists.</span>services
            </a>
            <BurgerMenu />
          </>
        )}
        {windowSize >= 1440 && (
          <>
            <nav className={css.navigation}>
              <a
                className={css.logoLink}
                href='/'>
                <span>psychologists.</span>services
              </a>
              <NavigationList />
            </nav>
            <UserMenu />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
