import React from 'react';
import PropTypes from 'prop-types';

class DomainFeedCard extends React.Component {
  render() {
    return (
      <div className="container-fluid domain-feed-card">
        <p>
          {this.props.title}
        </p>
      </div>
    );
  }
}

DomainFeedCard.propTypes = {
  title: PropTypes.string.isRequired
};


export default DomainFeedCard;