import React from 'react';
import PropTypes from 'prop-types';

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

TrendsBoxCard.propTypes = {
  trend: PropTypes.string
};

export default TrendsBoxCard;