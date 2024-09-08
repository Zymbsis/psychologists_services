import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesList } from '@redux/psychologists/selectors';
import { addToFavorite, deleteFromFavorite } from '@redux/psychologists/slice';
import { icon } from 'img';
import css from './PsychologistCardHeader.module.css';
import { selectIsLoggedIn } from '../../redux/user/selectors';

const PsychologistCardHeader = ({ rating, price, item }) => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(selectIsLoggedIn);
  const favoriteList = useSelector(selectFavoritesList);
  const isThisCardFavorite = favoriteList.some((elem) => elem._id === item._id);

  const onButtonClick = () => {
    if (isUserLoggedIn) {
      isThisCardFavorite
        ? dispatch(deleteFromFavorite(item._id))
        : dispatch(addToFavorite(item));
    } else {
      console.log(55);
    }
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.cardTitle}>Psychologist</h2>
      <div className={css.infoWrapper}>
        <svg className={css.starIcon}>
          <use href={`${icon}#icon-star`} />
        </svg>
        <p className={css.rating}>Rating: {rating}</p>
        <p className={css.price}>
          Price / 1 hour: <span>{price}&#36;</span>
        </p>
      </div>
      <button
        className={`${css.heartBtn} ${
          isThisCardFavorite && isUserLoggedIn && css.favoriteBtn
        } ${!isUserLoggedIn && css.disableBtn}`}
        onClick={onButtonClick}>
        <svg className={css.heartIcon}>
          <use href={`${icon}#icon-heart`} />
        </svg>
      </button>
    </div>
  );
};

export default PsychologistCardHeader;
