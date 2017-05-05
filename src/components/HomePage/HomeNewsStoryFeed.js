import React from 'react';
import HomeNewsStoryFeedCard from './HomeNewsStoryFeedCard';
import { connect } from 'react-redux';
import _ from 'underscore';
import PropTypes from 'prop-types';


class HomeNewsStoryFeed extends React.Component {
  render() {
    return (
      <div className="feed">
        <h3 className="feed-title"><b>Recent Stories</b></h3>
        {_.map(this.props.articles, (article, i) => {
          return <HomeNewsStoryFeedCard 
          key={i} 
          title={article.title} 
          articleUrl={article.articleUrl}
          organisation={article.organisation}  
          _id={article._id}
          logoUrl={article.logoUrl}
          />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.byId
  };
}

HomeNewsStoryFeed.propTypes = {
  articles: PropTypes.shape({
    _id: PropTypes.number,
    title: PropTypes.string,
    articleUrl: PropTypes.string,
    organisation: PropTypes.string,
    logoUrl: PropTypes.string
  })
};

export default connect(mapStateToProps)(HomeNewsStoryFeed);