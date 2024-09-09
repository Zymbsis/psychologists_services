import { useBurgerMenu } from './useBurgerMenu';
import { icon } from 'img';
import NavigationList from '../NavigationList/NavigationList';
import UserMenu from '../UserMenu/UserMenu';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isMenuOpen, handleCloseMenu, handleToggleMenu] = useBurgerMenu();

  return (
    <div>
      <button
        className={css.openMenuBtn}
        onClick={handleToggleMenu}
        type='button'>
        <svg>
          <use href={`${icon}#${isMenuOpen ? 'icon-close' : 'icon-menu'}`} />
        </svg>
      </button>

      {isMenuOpen && (
        <div
          className={css.burgerMenu}
          onClick={handleCloseMenu}>
          <nav className={css.navLinks}>
            <NavigationList className={css.burgerNavList} />
          </nav>
          <UserMenu className={css.burgerUserMenu} />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
