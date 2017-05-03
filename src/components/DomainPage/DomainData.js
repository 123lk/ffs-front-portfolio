import React from 'react';
import PropTypes from 'prop-types';

const DomainData = ({ registeredDomain, organisationName, domainDescription }) => (
  <div>
    <a className="article-title" href={registeredDomain}>{organisationName}</a>
    <h3>{organisationName}</h3>
    <p>{domainDescription}</p>
  </div>
);

// TODO: refactor property names
DomainData.propTypes = {
  organisationName: PropTypes.string,
  domainDescription: PropTypes.string,
  registeredDomain: PropTypes.string
};


export default DomainData;