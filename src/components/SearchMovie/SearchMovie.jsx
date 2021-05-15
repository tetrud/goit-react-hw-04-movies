import { Component } from 'react';

class SearchMovie extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={this.handleChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    );
  }
}

export default SearchMovie;
