import css from './PsychologistCardHeader.module.css';
import { icon } from 'img';

const PsychologistCardHeader = ({ rating, price, _id }) => {
  const onButtonClick = () => {
    console.log(_id);
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
          className={css.heartBtn}
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
