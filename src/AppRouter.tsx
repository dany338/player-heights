import { lazy, Suspense} from 'react'
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from './layout';

const PlayersView = lazy(() => import('./views/PlayersView'));
const Page404 = lazy(() => import('./views/Page404'));

const AppRouter = () => {
  const location: any = useLocation();
  const state: any = location.state;

  return <Routes location={state?.backgroundLocation || location}>
    <Route path="/" element={<Layout />}>
      <Route index element={
        <Suspense fallback={<span>Loading...</span>}>
          <PlayersView />
        </Suspense>
      }/>
      <Route path="*" element={<Suspense fallback={<span>Loading...</span>}><Page404 /></Suspense>} />
    </Route>
  </Routes>
};

export default AppRouter;
