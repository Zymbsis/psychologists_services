import { Suspense } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import { Header } from 'components';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = ({ children }) => {
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
