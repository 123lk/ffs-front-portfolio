import React from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import DomainFeedCard from './DomainFeedCard'; 

const DomainApprovedFeed = ({articles}) => (
      <div>
        <h3>Approved by moderators: </h3>
        {_.reduce(articles, (acc, article, i) => {
          console.log(article)
          if (article.articleIsFakeNews) 
          {
            
          acc.push(<DomainFeedCard 
          key={i} 
          title={article.title} 
          organisation={article.organisation}
          articleUrl={article.articleUrl}
          _id={article._id}
          />);
        }
          return acc; 
        },[]).slice(0, 5)}
      </div>

);

DomainApprovedFeed.propTypes = {
  articles: PropTypes.shape({
    _id: PropTypes.number,
    title: PropTypes.string,
    articleUrl: PropTypes.string,
    organisation: PropTypes.string  
  })
};



export default DomainApprovedFeed;
