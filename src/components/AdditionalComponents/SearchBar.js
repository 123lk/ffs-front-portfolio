import React, { Component } from 'react';
import 'react-instantsearch-theme-algolia/style.scss';
import '../../css/SearchBar.scss';
import { InstantSearch, Hits, SearchBox, Highlight } from 'react-instantsearch/dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      areHitsVisible: false
    };
    this.handleSearchBoxChange = this.handleSearchBoxChange.bind(this);
    this.handleSearchBoxReset = this.handleSearchBoxReset.bind(this);
  }
  render() {
    return (
      <div>
        <InstantSearch
          appId='BSCGDWJBKU'
          apiKey='ecebdf5fdebcddc8c94f127d1eee4e4c'
          indexName='FFS'
        >
          <SearchBox
            className='search-box'
            onChange={this.handleSearchBoxChange}
            onReset={this.handleSearchBoxReset}
          />
          {this.state.areHitsVisible
            ? <SearchResults />
            : null}
        </InstantSearch>
      </div>
    );
  }
  handleSearchBoxReset() {
    this.setState({
      areHitsVisible: false,
      value: ''
    });
  }
  handleSearchBoxChange(e) {
    const { value } = e.target;
    this.setState({
      areHitsVisible: value.length !== 0,
      value
    });
  }
}

const SearchResults = () => (
  <div className='SearchResults'>
    <Hits hitComponent={Result} />
  </div>
);

const Result = ({ hit }) => (
  <a href={`/${hit.link}/${hit._id}`}>
    <div className='result'>
      <span>
        <Highlight attributeName='title' hit={hit} />
        <Highlight attributeName='organisationName' hit={hit} />
      </span>
    </div>
  </a>
);

export default SearchBar;