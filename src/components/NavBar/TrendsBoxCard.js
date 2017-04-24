import React from 'react';

class TrendsBoxCard extends React.Component {
  render () {
    return (
      <div className="container-fluid trends-box-card">
        <p>
      {this.props.trend}
        </p>
      </div>
    );
  }
}

export default TrendsBoxCard;