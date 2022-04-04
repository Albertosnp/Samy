import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './Layout';

const Home = lazy(() => import('./views/Home/Home'));
const About = lazy(() => import('./views/About/About'));
const NotFound = lazy(() => import('./views/NotFound/NotFound'));

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Navigate to="/es" />} /> */}
        <Route
          index
          // path={`${base}`}
          element={
            <Suspense fallback={<>...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={`/about`}
          element={
            <Suspense fallback={<>...</>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<>...</>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
