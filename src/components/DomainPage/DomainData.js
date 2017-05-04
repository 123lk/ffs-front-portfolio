import React from 'react';
import PropTypes from 'prop-types';

const DomainData = ({ registeredDomain, organisationName, domainDescription }) => (
  <div>
    <p className="domain-title">{organisationName}</p>
    <p className="domain-link">{registeredDomain}</p>
    <p className="domain-description">{domainDescription}</p>
  </div>
);

DomainData.propTypes = {
  organisationName: PropTypes.string,
  domainDescription: PropTypes.string,
  registeredDomain: PropTypes.string
};


export default DomainData;