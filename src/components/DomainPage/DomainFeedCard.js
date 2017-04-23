import React from 'react';

class DomainFeedCard extends React.Component {
  render () {
    return (
      <div className="container-fluid domain-feed-card">
        <p>
      {this.props.title}
        </p>
      </div>
    );
  }
}

export default DomainFeedCard;