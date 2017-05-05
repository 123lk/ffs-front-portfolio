import React from 'react';
import PropTypes from 'prop-types';

class HomeNewsStoryFeedCard extends React.Component {
  render() {
    return (
      <div className="card" onClick={redirect.bind(this)} >
        <div className="media">
          <div className="media-left">
            <div className="card-image">
              <img src={this.props.logoUrl} />
            </div>
          </div>
        <div className="media-content">
          <a className="article-title" href={`https://forfactsake.herokuapp.com/articles/${this.props._id}`}>{this.props.title}</a>
          <p className="org-title">{this.props.organisation}</p>
        </div>
        </div>
      </div>
    );
  }
}

function redirect () {
  location.href = `https://forfactsake.herokuapp.com/articles/${this.props._id}`;
}

HomeNewsStoryFeedCard.propTypes = {
  _id: PropTypes.number,
  title: PropTypes.string,
  articleUrl: PropTypes.string,
  organisation: PropTypes.string,
  logoUrl: PropTypes.string
};


export default HomeNewsStoryFeedCard;