import PsychologistsList from '../components/PsychologistsList/PsychologistsList';
import LoadMoreButton from '../components/LoadMoreButton/LoadMoreButton';

const PsychologistsPage = () => {
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
