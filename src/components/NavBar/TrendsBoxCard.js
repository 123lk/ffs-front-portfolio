import React from 'react';

class TrendsBoxCard extends React.Component {
  render () {
    return (
      <div className="container-fluid trends-box-card">
        <p><b>{this.props.trend}</b>
      
        </p>
      </div>
    );
  }
}

export default TrendsBoxCard;