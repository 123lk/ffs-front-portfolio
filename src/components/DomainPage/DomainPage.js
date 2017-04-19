import React from 'react';
import DomainApprovedFeed from './DomainApprovedFeed';
import DomainPendingFeed from './DomainPendingFeed';
import DomainTextArea from './DomainTextArea';

class DomainPage extends React.Component {
  render () {
    return (
      <div>
        <h1>This is a DomainPage</h1>
        <DomainTextArea/>
        <DomainApprovedFeed/>
        <DomainPendingFeed/>
      </div>
    );
  }
}

export default DomainPage;