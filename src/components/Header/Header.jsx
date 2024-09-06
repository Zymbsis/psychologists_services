import NavigationList from '../NavigationList/NavigationList';
import UserMenu from '../UserMenu/UserMenu';
import css from './Header.module.css';

const Header = ({ user }) => {
  return (
    <header className={css.header}>
      <div className={`${css.container} container`}>
        <nav className={css.navigation}>
          <a
            className={css.logoLink}
            href='/'>
            <span>psychologists.</span>services
          </a>
          <NavigationList />
        </nav>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
