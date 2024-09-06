import { FilterBar, PsychologistsList, LoadMoreButton } from 'components';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/psychologists/selectors';

const PsychologistsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <section className='section'>
      <div className='container'>
        <FilterBar />
        <PsychologistsList />
        {!isLoading && <LoadMoreButton />}
      </div>
    </section>
  );
};

export default PsychologistsPage;
