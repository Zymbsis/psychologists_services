import { Suspense, useEffect } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import { Header } from 'components';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectLastResult } from '../../redux/psychologists/selectors';
import { getPsychologistsFirstRequest } from '../../redux/psychologists/operations';

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const lastResult = useSelector(selectLastResult);
  useEffect(() => {
    dispatch(getPsychologistsFirstRequest({ condition: lastResult }));
  }, [dispatch, lastResult]);

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
