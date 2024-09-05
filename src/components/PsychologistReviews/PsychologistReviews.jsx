import css from './PsychologistReviews.module.css';
import { icon } from 'img';
import { useModal } from 'helpers';

const PsychologistReviews = ({ reviews }) => {
  const { openModal } = useModal();

  const openAppointmentForm = () => {
    openModal(<p>Appointment Form</p>);
  };

  return (
    <>
      <ul className={css.reviews}>
        {reviews.map((review, index) => (
          <li key={index}>
            <div className={css.ratingWrapper}>
              <span className={css.avatar}>{review.reviewer[0]}</span>
              <div>
                <p className={css.name}>{review.reviewer}</p>
                <span className={css.rating}>
                  <svg>
                    <use href={`${icon}#icon-star`} />
                  </svg>
                  <span>{review.rating}</span>
                </span>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
      <button
        className={css.appointmentBtn}
        type='button'
        onClick={openAppointmentForm}>
        Make an appointment
      </button>
    </>
  );
};

export default PsychologistReviews;
