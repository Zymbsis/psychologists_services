import { useDispatch, useSelector } from 'react-redux';
import css from './LoadMoreButton.module.css';
import {
  selectHasNextPage,
  selectPsychologistsList,
} from '../../redux/psychologists/selectors';
import { getNextRequest } from '../../redux/psychologists/slice';

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
        <p>There are all result</p>
      )}
    </>
  );
};

export default LoadMoreButton;
