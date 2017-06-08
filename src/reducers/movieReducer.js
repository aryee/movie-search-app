import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';

const initialState = {
  inProgress: false,
  page: 1,
  per_page: 10,
  total: 0,
  total_pages: 1,
  data: [],
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let newState;

  switch (type) {
    case types.MOVIE_REQUEST:
      newState = objectAssign({}, state);
      newState.inProgress = true;
      return newState;

    case types.MOVIE_FAILURE:
      newState = objectAssign({}, state);
      newState.inProgress = false;
      return newState;

    case types.MOVIE_SUCCESS:
      newState = objectAssign({}, payload.res);
      newState.inProgress = false;
      return newState;

    default:
      return state;
  }
};

export default movieReducer;
