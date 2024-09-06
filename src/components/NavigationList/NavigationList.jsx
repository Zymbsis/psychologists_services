import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '@redux/user/selectors';
import clsx from 'clsx';
import css from './NavigationList.module.css';

const getActiveClass = ({ isActive }) =>
  clsx(css.navLink, { [css.activeLink]: isActive });

const NavigationList = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

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
      {isUserLoggedIn && (
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

export default NavigationList;
