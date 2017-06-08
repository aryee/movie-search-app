import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/searchActions';
// import * as actionCreators from '../actions/searchActions';

export class SearchComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(evt) {
    this.props.actions.updateSearchTerm(evt.target.value);
  }
  
  handleSearch() {
    this.props.actions.getMovie(this.props.search.searchTerm, 1);
  }

  render() {
    const {
      searchTerm
    } = this.props.search;

    return (
      <div>
        <input
          className="search__input"
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

SearchComponent.propTypes = {
  search: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  search: state.search
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
