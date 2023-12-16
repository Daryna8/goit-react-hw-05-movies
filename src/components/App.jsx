import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
// import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import Layout from 'components/layout/Layout';
// import MoviesDetails from 'pages/MoviesDetails';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const Movies = lazy(() => import('pages/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
