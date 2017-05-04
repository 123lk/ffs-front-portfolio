import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArticleCommentList from './ArticleCommentList';
import ArticleTextArea from './ArticleData';
import ArticleCommentForm from './ArticleCommentForm';
import * as actions from '../../actions/index.js';
import { setIndentationFormat } from '../../helpers/index';
import '../../css/ArticlePage.scss';

class ArticlePage extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentArticle(this.props.params.id);
  }
  render() {
    return (
      <div>
        <div className="article-text-area">
          <ArticleTextArea {...this.props.articleData} />
        </div>
        <div className="article-comment-list">
          <ArticleCommentList comments={this.props.comments} />
        </div>
        <h3 >Start a discussion...</h3>
        <ArticleCommentForm threadId={null} articleId={Number(this.props.params.id)} />
      </div>
    );
  }
}

ArticlePage.propTypes = {
  articleData: PropTypes.shape({
    title: PropTypes.string,
    aritcleUrl: PropTypes.string,
    description: PropTypes.string,
    organisation: PropTypes.string
  }),
  comments: PropTypes.shape({
    author: PropTypes.string,
    children: PropTypes.array,
    comment: PropTypes.string,
    votes: PropTypes.number
  }),
  fetchCurrentArticle: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

  function mapStateToProps(state) {
  return {
    articleData: state.currentArticle.articleData,
    comments: setIndentationFormat(state.currentArticle.commentsById)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentArticle: (id) => {
      dispatch(actions.fetchCurrentArticle(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);