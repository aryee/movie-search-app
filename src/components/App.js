import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <IndexLink to="/">Home</IndexLink>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
