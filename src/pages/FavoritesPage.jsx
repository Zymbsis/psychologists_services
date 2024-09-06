import { FavoritesList, EmptyFavorites } from 'components';
import { useSelector } from 'react-redux';
import { selectFavoritesList } from '../redux/psychologists/selectors';

const FavoritesPage = () => {
  const favoriteList = useSelector(selectFavoritesList);
  return (
    <section className='section'>
      <div className='container'>
        {favoriteList.length ? <FavoritesList /> : <EmptyFavorites />}
      </div>
    </section>
  );
};

export default FavoritesPage;
