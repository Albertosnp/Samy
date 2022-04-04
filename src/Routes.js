import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';

const Home = lazy(() => import('./views/Home/Home'));
const Detail = lazy(() => import('./views/Detail/Detail'));
const NotFound = lazy(() => import('./views/NotFound/NotFound'));

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
          path={`/detail`}
          element={
            <Suspense fallback={<>...</>}>
              <Detail />
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
