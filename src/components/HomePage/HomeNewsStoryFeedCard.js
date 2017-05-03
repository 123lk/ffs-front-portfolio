import React from 'react';
import PropTypes from 'prop-types';

class HomeNewsStoryFeedCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="media">
          <div className="media-left">
            <div className="card-image">
              <img src="http://blog.lostcollective.com/wp-content/uploads/2016/08/the-guardian-logo.png" />
            </div>
          </div>
        <div className="media-content">
          <a className="article-title" href={this.props.articleUrl}>{this.props.title}</a>
          <p className="org-title">{this.props.organisation}</p>
        </div>
        </div>
      </div>
    );
  }
}

HomeNewsStoryFeedCard.propTypes = {
  title: PropTypes.string,
  articleUrl: PropTypes.string,
  organisation: PropTypes.string
};


export default HomeNewsStoryFeedCard;