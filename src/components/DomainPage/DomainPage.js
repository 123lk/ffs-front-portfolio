import React from 'react';
import DomainApprovedFeed from './DomainApprovedFeed';
import DomainPendingFeed from './DomainPendingFeed';
import DomainTextArea from './DomainTextArea';

class DomainPage extends React.Component {
  render () {
    return (
      <div>
        <div className="row domain-text-area">
          <DomainTextArea/>
        </div>
        <div className="row domain-approved-feed">
          <DomainApprovedFeed/>
        </div>
        <div className="row domain-pending-feed">
          <DomainPendingFeed/>
        </div>
      </div>
    );
  }
}

export default DomainPage;