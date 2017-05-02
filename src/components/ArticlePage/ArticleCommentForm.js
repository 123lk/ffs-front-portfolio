import React from 'react';

class ArticleCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.text });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ text: '' });
    // write post request 
  }

  render() {
    return (
      <div className="field comment-box">
        <p className="control">
          <textarea className="textarea" placeholder="Contribute to discussion..."></textarea>
        </p>
        <p className="control">
          <button className="button is-primary">Submit</button>
        </p>
      </div>
    );
  }
}


export default ArticleCommentForm;