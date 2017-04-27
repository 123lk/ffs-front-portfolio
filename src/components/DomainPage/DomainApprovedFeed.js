import React from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import DomainFeedCard from './DomainFeedCard'; 

const DomainApprovedFeed = ({articles}) => (
      <div>
        <h3>approved feed</h3>
        {_.reduce(articles, (acc, article, i) => {
          if (article.articleIsFakeNews) {
          acc.push(<DomainFeedCard key={i} title={article.title} domain={article.domain}/>);
        }
          return acc; 
        },[]).slice(0, 5)}
      </div>

);

DomainApprovedFeed.propTypes = {
  articles: PropTypes.array.isRequired
};



export default DomainApprovedFeed;
