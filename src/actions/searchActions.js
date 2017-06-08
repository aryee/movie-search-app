import * as types from '../constants/actionTypes';

export const updateSearchTerm = (searchTerm = '') => {
  const payload = {
    searchTerm
  };

  return {
    type: types.UPDATE_SEARCH_TERM,
    payload
  };
};
