import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import DomainFeedCard from './DomainFeedCard'; 

class DomainPendingFeed extends React.Component {
  render () {
    return (
      <div>
        <h3>pending feed</h3>
        {_.reduce(this.props.articles, (acc, article, i) => {
          if (!article.articleIsFakeNews) {
          acc.push(<DomainFeedCard key={i} title={article.title} domain={article.domain}/>);
          }
          return acc; 
        },[]).slice(0, 5)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articlesReducer.byId
  };
}

export default connect(mapStateToProps)(DomainPendingFeed);