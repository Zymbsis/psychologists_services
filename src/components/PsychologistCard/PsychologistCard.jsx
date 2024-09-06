import { useState } from 'react';
import PsychologistCardHeader from '../PsychologistCardHeader/PsychologistCardHeader';
import PsychologistDetails from '../PsychologistDetails/PsychologistDetails';
import PsychologistReviews from '../PsychologistReviews/PsychologistReviews';
import css from './PsychologistCard.module.css';

const PsychologistCard = ({ item }) => {
  const [showReviews, setShowReviews] = useState(false);
  const {
    name,
    avatar_url,
    rating,
    price_per_hour,
    experience,
    license,
    specialization,
    initial_consultation,
    about,
    reviews,
  } = item;
  const details = [
    { experience },
    { license },
    { specialization },
    { initial_consultation },
  ];

  return (
    <>
      <div className={css.imgWrapper}>
        <img
          className={css.avatar}
          src={avatar_url}
          alt={name}
          width={96}
          height={96}
        />
      </div>
      <div className={css.contentWrapper}>
        <PsychologistCardHeader
          rating={rating}
          price={price_per_hour}
          item={item}
        />
        <h3 className={css.name}>{name}</h3>
        <PsychologistDetails details={details} />
        <p className={css.description}>{about}</p>
        {showReviews ? (
          <PsychologistReviews
            reviews={reviews}
            name={name}
            photo={avatar_url}
          />
        ) : (
          <button
            className={css.readMoreBtn}
            type='button'
            onClick={() => setShowReviews(true)}>
            Read more
          </button>
        )}
      </div>
    </>
  );
};

export default PsychologistCard;
