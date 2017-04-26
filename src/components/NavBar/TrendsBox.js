import React from 'react';
import PropTypes from 'prop-types';

import TrendsBoxCard from './TrendsBoxCard'; 

class TrendsBox extends React.Component {
  render () {
    return (
      <div className="trends-box-inner">
      <h2><b>FFS Trending</b></h2>
        {this.props.trends.map((trend, i) => {
          return <TrendsBoxCard key={i} trend={trend.trend}/>;
        }).slice(0, 10)}
      </div>
    );
  }
}

TrendsBox.propTypes = {
  trends: PropTypes.array.isRequired
};

export default TrendsBox;