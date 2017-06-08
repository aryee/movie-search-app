import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie}) => {
  return (
    <li className="movie">
      <div className="movie__content">
        <div className="movie__poster">
          <img src={`${movie.Poster === 'N/A' ? 'img/video-film-reel.jpg' : movie.Poster}`} />
        </div>
        <div className="movie__details">
          <h3>{movie.Title}</h3>
          <div>({movie.Year})</div>
          <div><a href={`http://www.imdb.com/title/${movie.imdbID}`} target="_blank">View on IMDB </a></div>
        </div>
      </div>
    </li>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
