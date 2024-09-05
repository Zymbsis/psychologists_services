import { useSelector } from 'react-redux';
import css from './PsychologistsList.module.css';
import { selectPsychologistsList } from '../../redux/psychologists/selectors';
import PsychologistCard from '../PsychologistCard/PsychologistCard';

const PsychologistsList = () => {
  const psychologistsList = useSelector(selectPsychologistsList);
  console.log(psychologistsList);

  return (
    <div>
      {psychologistsList.length !== 0 && (
        <ul className={css.psychologistsList}>
          {psychologistsList.map((item) => (
            <li key={item._id}>
              <PsychologistCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PsychologistsList;
