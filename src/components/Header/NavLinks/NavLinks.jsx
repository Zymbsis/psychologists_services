import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './NavLinks.module.css';

const NavLinks = () => {
  const isUserLoggedIn = false;

  return (
    <ul className={css.navLInksList}>
      <li>
        <NavLink
          className={css.navLink}
          to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, { [css.activeLink]: isActive })
          }
          to='/psychologists'>
          Psychologists
        </NavLink>
      </li>
      {isUserLoggedIn && (
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(css.navLink, { [css.activeLink]: isActive })
            }
            to='/favorites'>
            Favorites
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
