import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/movieActions';
import Movie from '../components/Movie';
import Search from './Search';

export class Movies extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.props.actions.getMovie('', 1);
  }

  componentWillReceiveProps(nextProps) {
    const movieTitle = nextProps.search.searchTerm;
    if (nextProps.search.searchTerm !== this.props.search.searchTerm) {
      this.props.actions.getMovie(movieTitle, 1);
    }
  }

  changePage(obj) {
    const page = obj.selected+1;
    const movieTitle = this.props.search.searchTerm;
    this.props.actions.getMovie(movieTitle, page);
  }

  renderMovies(movies) {
    if (movies.length) {
      return movies.map((movie) => {
        return <Movie movie={movie} key={movie.imdbID} />;
      });
    }
    return <div>No movies were found</div>;
  }

  render() {
    const movies = this.props.movies;
    return (
      <article>
        <h1>Movie Database Search</h1>
        <Search />
        {this.props.movies.total_pages>1 && <ReactPaginate pageCount={this.props.movies.total_pages} onPageChange={this.changePage} containerClassName="pagination" />}
        <ol className="movie-list">
          {this.renderMovies(movies.data)}
        </ol>
      </article>
    );
  }
}

Movies.propTypes = {
  search: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  search: state.search,
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
