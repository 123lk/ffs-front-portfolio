import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DomainTextArea extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.domain.domainName}</h1>
        <p>{this.props.domain.domainDescription}</p>
      </div>
    );
  }
}

// TODO: refactor property names
DomainTextArea.propTypes = {
  domain: PropTypes.shape({
    domainName: PropTypes.string.isRequired,
    domainDescription: PropTypes.string.isRequired
  })
};

function mapStateToProps(state) {
  return {
    domain: state.articles.domain
  };
}

export default connect(mapStateToProps)(DomainTextArea);