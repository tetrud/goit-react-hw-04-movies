import { Suspense, lazy } from 'react';

import Container from './components/Container';
import AppBar from './components/AppBar';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

import routes from './routes';

const { Switch, Route } = require('react-router-dom');

function App() {
  return (
    <>
      <Container>
        <AppBar />

        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
