import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Header } from 'components';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebaseAuth.js';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const PsychologistsPage = lazy(() => import('./pages/PsychologistsPage.jsx'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage.jsx'));

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is logged in');
        setUser(user);
      } else {
        setUser(null);
        console.log('User is logged out');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header user={user} />
      <main>
        <Suspense fallback={<p>...Loading</p>}>
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
              element={user ? <FavoritesPage /> : <Navigate to='/' />}
            />
            <Route
              path='*'
              element={<Navigate to='/' />}
            />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
