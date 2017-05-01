import React from 'react';

class ArticleCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: ''};
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
      <div className="comment-form">
        <div className="form-group">
          <textarea className="form-control" rows="1.5" placeholder="Contribute to discussion..." onChange={this.handleChange} maxLength="1000"></textarea>
        </div>
        <div className="button-part">
          <button type="button" className="btn btn-primary btn-xs"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>  Comment</button>
        </div>
      </div>
    );
  }
}


export default ArticleCommentForm;