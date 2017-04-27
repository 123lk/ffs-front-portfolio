import React from 'react';
import PropTypes from 'prop-types';

const DomainData = ({ domainName, domainDescription }) => (
  <div>
    <h3>{domainName}</h3>
    <p>{domainDescription}</p>
  </div>
);

// TODO: refactor property names
DomainData.propTypes = {
  domainName: PropTypes.string,
  domainDescription: PropTypes.string
};


export default DomainData;