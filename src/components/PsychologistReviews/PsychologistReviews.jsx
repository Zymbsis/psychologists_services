import { useModal } from 'helpers';
import { icon } from 'img';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import css from './PsychologistReviews.module.css';

const PsychologistReviews = ({ reviews, name, photo }) => {
  const { openModal } = useModal();

  const openAppointmentForm = () => {
    openModal(
      <AppointmentForm
        name={name}
        photo={photo}
      />,
    );
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
