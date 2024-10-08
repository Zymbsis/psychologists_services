import 'react-toastify/dist/ReactToastify.css';
import { Suspense, useEffect } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSortQuery,
  selectSortType,
} from '@redux/psychologists/selectors';
import {
  getPsychologistsFromAtoZ,
  getPsychologistsFromZtoA,
} from '@redux/psychologists/operations';
import Header from '../Header/Header';

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const sortQuery = useSelector(selectSortQuery);
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
