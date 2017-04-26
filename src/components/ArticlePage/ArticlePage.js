import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ArticleCommentList from './ArticleCommentList';
import ArticleTextArea from './ArticleData';
import ArticleCommentForm from './ArticleCommentForm'; 
import * as actions from '../../actions/index.js';
import {getCommentsByVotes} from '../../reducers/currentArticle.reducer';

class ArticlePage extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentArticle(this.props.params.id);
  }
  render() {
    return (
      <div>
        <div className="row article-text-area">
          <ArticleTextArea {...this.props.articleData} />
        </div>
        <div className="row article-comment-list">
          <ArticleCommentList comments={this.props.comments} />

          {/* TODO: refactor into its own component*/}
          <button type="button" className="btn btn-primary paginate"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>  Previous</button>
          <button type="button" className="btn btn-primary paginate"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>  Next</button>
        </div>
        <ArticleCommentForm />
      </div>
    );
  }
}

ArticlePage.propTypes = {
  articleData: PropTypes.shape({
    title: PropTypes.string,
    domain: PropTypes.string,
    description: PropTypes.string
  }),
  comments: PropTypes.array.isRequired,
  fetchCurrentArticle: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

function mapStateToProps (state) {
  return {
    articleData: state.currentArticle.articleData,
    comments: getCommentsByVotes(state.currentArticle.commentsById)
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