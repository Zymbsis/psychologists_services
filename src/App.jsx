import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebaseApp.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/user/selectors.js';
import { setUserName, setUserStatus } from './redux/user/slice.js';
import { SharedLayout } from 'components';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const PsychologistsPage = lazy(() => import('./pages/PsychologistsPage.jsx'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage.jsx'));

const App = () => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUserStatus(currentUser.email));
        if (currentUser.displayName) {
          dispatch(setUserName(currentUser.displayName));
        }
      } else {
        dispatch(setUserStatus(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <SharedLayout>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/psychologists'
          element={<PsychologistsPage />}
        />
        <Route
          path='/favorites'
          element={isUserLoggedIn ? <FavoritesPage /> : <Navigate to='/' />}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </SharedLayout>
  );
};

export default App;
