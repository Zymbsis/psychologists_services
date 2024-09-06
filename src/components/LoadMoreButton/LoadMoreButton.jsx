import { useDispatch, useSelector } from 'react-redux';
import { getNextRequest } from '../../redux/psychologists/slice';
import {
  selectHasNextPage,
  selectPsychologistsList,
} from '../../redux/psychologists/selectors';
import css from './LoadMoreButton.module.css';

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const hasNextPage = useSelector(selectHasNextPage);
  const psychologistsList = useSelector(selectPsychologistsList);
  const lastResult = psychologistsList[psychologistsList.length - 1]?.name;

  const handleLoadMore = () => {
    dispatch(getNextRequest(lastResult));
  };

  return (
    <>
      {hasNextPage ? (
        <button
          className={css.loadMoreBtn}
          onClick={handleLoadMore}
          type='button'>
          Load more
        </button>
      ) : (
        <p className={css.text}>These are all the results.</p>
      )}
    </>
  );
};

export default LoadMoreButton;
