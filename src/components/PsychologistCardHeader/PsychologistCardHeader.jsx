import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesList } from '../../redux/psychologists/selectors';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../redux/psychologists/slice';
import { icon } from 'img';
import css from './PsychologistCardHeader.module.css';

const PsychologistCardHeader = ({ rating, price, item }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoritesList);
  const isThisCardFavorite = favoriteList.some((elem) => elem._id === item._id);

  const onButtonClick = () => {
    isThisCardFavorite
      ? dispatch(deleteFromFavorite(item._id))
      : dispatch(addToFavorite(item));
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
        <button
          className={`${css.heartBtn} ${isThisCardFavorite && css.favoriteBtn}`}
          onClick={onButtonClick}>
          <svg className={css.heartIcon}>
            <use href={`${icon}#icon-heart`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PsychologistCardHeader;
