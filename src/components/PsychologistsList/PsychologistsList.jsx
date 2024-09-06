import { useSelector } from 'react-redux';
import css from './PsychologistsList.module.css';
import {
  selectIsLoading,
  selectPsychologistsList,
  selectSortQuery,
} from '../../redux/psychologists/selectors';
import PsychologistCard from '../PsychologistCard/PsychologistCard';
import { useEffect, useRef, useState } from 'react';

const PsychologistsList = () => {
  const [firstRender, setFirstRender] = useState(true);
  const psychologistsList = useSelector(selectPsychologistsList);
  const isLoading = useSelector(selectIsLoading);
  const listRef = useRef();
  const sortQuery = useSelector(selectSortQuery);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    if (sortQuery) {
      const lastCard = listRef.current.lastElementChild;
      window.scrollBy({
        top: lastCard?.getBoundingClientRect().height * 2,
        behavior: 'smooth',
      });
    }
  }, [psychologistsList]);

  return (
    <div>
      <ul
        className={css.psychologistsList}
        ref={listRef}>
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
