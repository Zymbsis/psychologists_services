import { useSelector } from 'react-redux';
import css from './PsychologistsList.module.css';
import {
  selectIsLoading,
  selectPsychologistsList,
} from '../../redux/psychologists/selectors';
import PsychologistCard from '../PsychologistCard/PsychologistCard';

const PsychologistsList = () => {
  const psychologistsList = useSelector(selectPsychologistsList);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <ul className={css.psychologistsList}>
        {psychologistsList.map((item) => (
          <li key={item._id}>
            <PsychologistCard item={item} />
          </li>
        ))}
      </ul>

      {isLoading && <span className={css.loader}></span>}
    </div>
  );
};

export default PsychologistsList;
