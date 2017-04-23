import React from 'react';
import DomainApprovedFeed from './DomainApprovedFeed';
import DomainPendingFeed from './DomainPendingFeed';
import DomainTextArea from './DomainTextArea';
import * as actions from '../../actions/index.js';
import { connect } from 'react-redux';

class DomainPage extends React.Component {
  componentDidMount() {
    this.props.fetchDomain();
  }
  render() {
    return (
      <div>
        <div className="row domain-text-area">
          <DomainTextArea />
        </div>
        <div className="row domain-approved-feed">
          <DomainApprovedFeed />
        </div>
        <div className="row domain-pending-feed">
          <DomainPendingFeed />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDomain: () => {
      dispatch(actions.fetchDomain());
    }
  };
}

export default connect(null, mapDispatchToProps)(DomainPage);