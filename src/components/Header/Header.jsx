import NavLinks from './NavLinks/NavLinks';
import UserBar from './UserBar/UserBar';
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
          <NavLinks user={user} />
        </nav>
        <UserBar user={user} />
      </div>
    </header>
  );
};

export default Header;
