import React from 'react';
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

function mapStateToProps(state) {
  return {
    domain: state.articlesReducer.domain
  };
}

export default connect(mapStateToProps)(DomainTextArea);