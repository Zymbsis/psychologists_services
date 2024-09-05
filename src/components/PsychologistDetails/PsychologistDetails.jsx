import css from './PsychologistDetails.module.css';

const PsychologistDetails = ({ details }) => {
  return (
    <ul className={css.detailsList}>
      {details.map((detail, index) => (
        <li key={index}>
          <p className={css.feature}>
            {Object.keys(detail)}: <span>{Object.values(detail)}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default PsychologistDetails;
