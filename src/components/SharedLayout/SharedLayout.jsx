import { Suspense, useEffect } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import Header from '../Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLastResult,
  selectSortType,
} from '../../redux/psychologists/selectors';
import {
  getPsychologistsFromAtoZ,
  getPsychologistsFromZtoA,
} from '../../redux/psychologists/operations';

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const sortQuery = useSelector(selectLastResult);
  const sortType = useSelector(selectSortType);

  useEffect(() => {
    if (sortType === 'A to Z') {
      dispatch(getPsychologistsFromAtoZ(sortQuery));
    } else if (sortType === 'Z to A') {
      dispatch(getPsychologistsFromZtoA(sortQuery));
    }
  }, [dispatch, sortQuery, sortType]);

  return (
    <div>
      <>
        <Header />
        <main>
          <Suspense fallback={<p>...Loading</p>}>{children}</Suspense>
        </main>
        <ToastContainer
          position='top-center'
          autoClose={10000}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss={false}
          draggable
          theme='light'
          transition={Bounce}
        />
      </>
    </div>
  );
};

export default SharedLayout;
