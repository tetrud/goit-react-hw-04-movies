import { Suspense, lazy, Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import moviesApi from '../services/moviesApi';
import MovieDetails from '../components/MovieDetails';
import InformationNav from '../components/InformationNav';
import routes from '../routes';
import Loader from '../components/Loader';

const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "cast-page" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "reviews-page" */),
);

class MovieDetailsPage extends Component {
  state = {
    title: null,
    date: null,
    poster: null,
    vote: null,
    genres: null,
    overview: null,
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    try {
      const data = await moviesApi.getMovieDetails(movieId);
      this.setState({ ...data });
    } catch (error) {
      console.log(error);
    }
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const {
      title,
      poster_path,
      vote_average,
      overview,
      genres,
      release_date,
    } = this.state;
    const url = this.props.match.url;
    const date = new Date(release_date);

    return (
      <>
        <button className="Button" type="button" onClick={this.handleGoBack}>
          Go back
        </button>

        <MovieDetails
          title={title}
          poster={poster_path}
          vote={vote_average}
          overview={overview}
          genres={genres}
          year={date.getFullYear()}
        />
        <InformationNav url={url} />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={routes.cast} component={Cast} />
            <Route path={routes.reviews} component={Reviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
