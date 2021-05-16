import { Suspense, lazy } from 'react';

import Container from './components/Container';
import AppBar from './components/AppBar';
import NotFoundPage from './pages/NotFoundPage';
import routes from './routes';
import Loader from './components/Loader';

const { Switch, Route } = require('react-router-dom');

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "moviesDetails-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);

function App() {
  return (
    <>
      <Container>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
