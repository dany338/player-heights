import { Suspense } from 'react';
import Copyright from './components/Copyright';
import AppRouter from './AppRouter';

const App = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <AppRouter />
	  <Copyright />
  </Suspense>
)

export default App;