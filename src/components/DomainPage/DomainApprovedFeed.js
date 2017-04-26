import React from 'react';
import _ from 'underscore';
import DomainFeedCard from './DomainFeedCard'; 

class DomainApprovedFeed extends React.Component {
  render () {
    return (
      <div>
        <h3>approved feed</h3>
        {_.reduce(this.props.articles, (acc, article, i) => {
          if (article.articleIsFakeNews) {
          acc.push(<DomainFeedCard key={i} title={article.title} domain={article.domain}/>);
          }
          return acc; 
        },[]).slice(0, 5)}
      </div>
    );
  }
}


export default DomainApprovedFeed;