import React from 'react';
import PropTypes from 'prop-types';

const ArticleData = ({ title, articleUrl, description, organisation }) => (
  <div>
    <a className="article-title" href={articleUrl}>{title}</a>
    <p className="org-title">{organisation}</p>
    <p className="article-description">{description}</p>
  </div>
);

ArticleData.propTypes = {
  title: PropTypes.string,
  articleUrl: PropTypes.string,
  description: PropTypes.string,
  organisation: PropTypes.string
};

export default ArticleData;