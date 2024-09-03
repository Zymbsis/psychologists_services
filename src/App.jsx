import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from 'components';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const PsychologistsPage = lazy(() => import('./pages/PsychologistsPage.jsx'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage.jsx'));

const App = () => {
  return (
    <>
      <Header />
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
              element={<FavoritesPage />}
            />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
