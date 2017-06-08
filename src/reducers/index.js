import { combineReducers } from 'redux';
import search from './searchReducer';
import movies from './movieReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  search,
  movies,
  routing: routerReducer
});

export default rootReducer;
