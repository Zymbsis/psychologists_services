import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './NavLinks.module.css';

const getActiveClass = ({ isActive }) =>
  clsx(css.navLink, { [css.activeLink]: isActive });

const NavLinks = ({ user }) => {
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
          className={getActiveClass}
          to='/psychologists'>
          Psychologists
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={getActiveClass}
            to='/favorites'>
            Favorites
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
