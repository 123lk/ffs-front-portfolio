import React from 'react';
import {connect} from 'react-redux';

class ArticleTextArea extends React.Component {
 
  render () {
     let x = this.props.article;
     console.log(x)
    return (
    <h1>{console.log(this.props.article)}</h1>
    )
  }
}

function mapStateToProps(state) {
  return {
    article: state.articlesReducer.byId
  };
}

export default connect(mapStateToProps)(ArticleTextArea);