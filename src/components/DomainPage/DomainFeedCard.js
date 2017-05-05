import React from 'react';
import PropTypes from 'prop-types';

class DomainFeedCard extends React.Component {
  render() {
    return (
      <div className="card" onClick={redirect.bind(this)}>
        <div className="media">
          <div className="media-left">
            <div className="card-image">
              <img src={this.props.logoUrl} />
            </div>
          </div>
          <div className="media-content">
          <p className="article-title">{this.props.title}</p>
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

DomainFeedCard.propTypes = {
  _id: PropTypes.number,
  title: PropTypes.string,
  articleUrl: PropTypes.string,
  organisation: PropTypes.string,
  logoUrl: PropTypes.string
};


export default DomainFeedCard;
