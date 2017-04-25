import React from 'react';
import { connect } from 'react-redux';

class ArticleTextArea extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.articleById && this.props.articleById[1] && this.props.articleById[1].title}</h1>
        <h3>{this.props.articleById && this.props.articleById[1] && this.props.articleById[1].domain}</h3>
        <p>{this.props.articleById && this.props.articleById[1] && this.props.articleById[1].description}</p>
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  return {
    articleById: state.articlesReducer.byId
  };
}

export default connect(mapStateToProps)(ArticleTextArea);