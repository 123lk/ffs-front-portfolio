import React from 'react';
import PropTypes from 'prop-types';

const ArticleData = ({ title, articleUrl, description, organisation, domainId }) => (
  <div>
    <p className="article-main-title">{title}</p>
    <p className="article-link">{articleUrl}</p>
    <a className="org-title" href={`https://forfactsake.herokuapp.com/domains/${domainId}`}>{organisation}</a>
    <p className="article-description">{description}</p>
  </div>
);


ArticleData.propTypes = {
  domainId: PropTypes.number,
  title: PropTypes.string,
  articleUrl: PropTypes.string,
  description: PropTypes.string,
  organisation: PropTypes.string
};

export default ArticleData;