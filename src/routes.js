import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MoviesComponent from './containers/Movies';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MoviesComponent}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
