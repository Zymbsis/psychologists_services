import { NavLink } from 'react-router-dom';
import { icon } from 'img';
import css from './GetStartedLink.module.css';

const GetStartedLink = () => {
  return (
    <NavLink
      className={css.getStartedLink}
      to='/psychologists'>
      Get started
      <svg>
        <use href={`${icon}#icon-get-started-arrow`} />
      </svg>
    </NavLink>
  );
};

export default GetStartedLink;
