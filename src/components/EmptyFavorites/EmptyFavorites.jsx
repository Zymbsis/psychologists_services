import GetStartedLink from '../GetStartedLink/GetStartedLink';
import css from './EmptyFavorites.module.css';

const EmptyFavorites = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        You haven`t added any specialists to your favorites yet. Explore our
        list and add your preferred professionals for quick access!
      </p>
      <GetStartedLink />
    </div>
  );
};

export default EmptyFavorites;
