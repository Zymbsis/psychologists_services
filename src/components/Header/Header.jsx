import css from './Header.module.css';
import NavLinks from './NavLinks/NavLinks';
import UserBar from './UserBar/UserBar';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={`${css.container} container`}>
        <nav className={css.navigation}>
          <a
            className={css.logoLink}
            href='/'>
            <span>psychologists.</span>services
          </a>
          <NavLinks />
        </nav>
        <UserBar />
      </div>
    </header>
  );
};

export default Header;
