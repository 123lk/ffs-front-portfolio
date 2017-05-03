import React from 'react';
import PropTypes from 'prop-types';

const DomainData = ({ organisationName, domainDescription }) => (
  <div>
    <h3>{organisationName}</h3>
    <p>{domainDescription}</p>
  </div>
);

// TODO: refactor property names
DomainData.propTypes = {
  organisationName: PropTypes.string,
  domainDescription: PropTypes.string
};


export default DomainData;