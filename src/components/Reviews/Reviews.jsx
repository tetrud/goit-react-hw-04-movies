import { Component } from 'react';
import moviesApi from '../../services/moviesApi';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    moviesApi
      .getMovieReviews(movieId)
      .then(data => this.setState({ reviews: data }))
      .catch(error => console.log(error));
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>We don't have any reviews for this movie</h3>
        )}
      </>
    );
  }
}
export default Reviews;
