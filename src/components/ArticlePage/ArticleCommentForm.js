import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const API_ROOT = 'https://cwr4mc2ure.execute-api.eu-west-2.amazonaws.com/dev';

class ArticleCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.text === '') return;
    event.preventDefault();
    axios.post(`${API_ROOT}/articles/1`, {
      comment: this.state.text,
      userId: 1,
      threadId: this.props.threadId,
      articleId: this.props.articleId
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="field comment-box">
        <p className="control">
          <textarea className="textarea" placeholder="Contribute to discussion..." onChange={this.handleChange.bind(this)} ></textarea>
        </p>
        <p className="control">
          <button onClick={this.handleSubmit} className="button">Submit</button>
        </p>
      </div>
    );
  }
}

ArticleCommentForm.propTypes = {
  articleId: PropTypes.number.isRequired,
  threadId: PropTypes.number
};


export default ArticleCommentForm;