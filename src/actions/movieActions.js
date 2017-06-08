import * as types from '../constants/actionTypes';

const parseResponse = (response) => {
  return response.json();
};

export const movieSuccess = (payload) => {
  return {
    type: types.MOVIE_SUCCESS,
    payload,
  };
};

export const movieFailure = (err) => {
  //Handle errors with preferred error logging tool
  /* eslint-disable no-console */
  console.log(err);
  return {
    type: types.MOVIE_FAILURE,
  };
};

export const movieRequest = () => ({
  type: types.MOVIE_REQUEST,
});

export const getMovie = (title, page) => (dispatch) => {
  dispatch(movieRequest());

  const apiURI = 'https://jsonmock.hackerrank.com/api/movies/search/';
  const endpoint = `${apiURI}?Title=${title}&page=${page}`;
  return fetch(endpoint)
    .then(res => (parseResponse(res)))
    .then(res => {
      if (res.error && res.error.errorCode) {
        const error = Object.assign({}, res.error, { origin: 'getMovie' });
        dispatch(movieFailure(error));
        return;
      }

      const payload = Object.assign({ inProgress: false }, { res  });
      dispatch(movieSuccess(payload));
    })
    .catch(err => {
      const error = Object.assign({}, { internalMessage: err, origin: 'getMovie' });
      dispatch(movieFailure(error));
    });
};
