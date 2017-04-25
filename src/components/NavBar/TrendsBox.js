import React from 'react';
import TrendsBoxCard from './TrendsBoxCard'; 
import { connect } from 'react-redux'; 
import _ from 'underscore'; 


class TrendsBox extends React.Component {
  render () {
    return (
      <div className="trends-box-inner">
      <h2><b>FFS Trending</b></h2>
        {_.map(this.props.trends, (trend, i) => {
          return <TrendsBoxCard key={i} trend={trend.trend}/>;
        }).slice(0, 10)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    trends: state.articlesReducer.trendsById
  };
}

export default connect(mapStateToProps)(TrendsBox); 