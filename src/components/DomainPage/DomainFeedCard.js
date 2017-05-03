import React from 'react';
import PropTypes from 'prop-types';

class DomainFeedCard extends React.Component {
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
            <h4 className="title-is-4"><b>{this.props.title}</b></h4>
          </div>
        </div>
      </div>

    );
  }
}

DomainFeedCard.propTypes = {
  title: PropTypes.string.isRequired
};


export default DomainFeedCard;
