import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPsychologistsFirstRequest } from '../redux/psychologists/operations';
import PsychologistsList from '../components/PsychologistsList/PsychologistsList';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton';
import { selectLastResult } from '../redux/psychologists/selectors';

const PsychologistsPage = () => {
  const dispatch = useDispatch();
  const lastResult = useSelector(selectLastResult);

  useEffect(() => {
    dispatch(getPsychologistsFirstRequest({ condition: lastResult }));
  }, [dispatch, lastResult]);

  return (
    <div style={{ padding: '164px 0 100px 0' }}>
      <div className='container'>
        <PsychologistsList />
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default PsychologistsPage;
