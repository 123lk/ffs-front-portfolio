import React from 'react';
import PropTypes from 'prop-types';

const ArticleData = ({title, domain, description}) => (
  <div>
    <h1>{title}</h1>
    <h3>{domain}</h3>
    <p>{description}</p>
  </div>
);

ArticleData.propTypes = {
  title: PropTypes.string,
  domain: PropTypes.string,
  description: PropTypes.string
};

export default ArticleData;