import {UPDATE_SEARCH_TERM} from '../constants/actionTypes';
import objectAssign from 'object-assign';

const initialState = {
  searchTerm: ''
};

export const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let newState;

  switch (type) {
    case UPDATE_SEARCH_TERM:
      newState = objectAssign({}, state);
      newState.searchTerm = payload.searchTerm;
      return newState;

    default:
      return state;
  }
};

export default searchReducer;
