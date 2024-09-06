import { useSelector } from 'react-redux';
import css from './FavoritesList.module.css';
import { selectFavoritesList } from '../../redux/psychologists/selectors';
import PsychologistCard from '../PsychologistCard/PsychologistCard';

const FavoritesList = () => {
  const favoritesList = useSelector(selectFavoritesList);

  return (
    <div>
      {favoritesList.length !== 0 && (
        <ul className={css.favoritesList}>
          {favoritesList.map((item) => (
            <li key={item._id}>
              <PsychologistCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
