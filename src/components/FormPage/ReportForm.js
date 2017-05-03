import React from 'react';
import axios from 'axios';
import '../../css/ReportForm.scss';

const API_ROOT = 'https://cwr4mc2ure.execute-api.eu-west-2.amazonaws.com/dev';

class ReportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '', title: '', text: '', welcomeMessage: 'Report an Article', paragraph: 'If you come across an article that you know to be false, this is the place to report it'};
    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeUrl(event) {
    this.setState({ url: event.target.value });
  }

   handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeText(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.text === '' || this.state.url === '' || this.state.title === '') return;
    event.preventDefault();
    axios.post(`${API_ROOT}/articles`, {
      href: this.state.url,
      title: this.state.title,
      comment: this.state.text,
      userId: 1
    })
    .then((response) => {
      this.setState({ text: '', title: '', url: '', welcomeMessage: 'Thank you. Your report has been logged', paragraph: ''});
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });  
  }

  render() {
    return (
      <div>
        <div className='intro'>
          <h3>{this.state.welcomeMessage}</h3>
          <p>{this.state.paragraph}</p>
          <div className = 'report-form-div'>
          <div className="field">
            <input type="text" value={this.state.url} onChange={this.handleChangeUrl} className="input" placeholder='URL of article' />
          </div>
          <div className="field">
            <input type="text" value={this.state.title} onChange={this.handleChangeTitle} className="input" placeholder='Title of article' />
          </div>
          <div className="field">
            <textarea rows='20' value={this.state.text} onChange={this.handleChangeText} className="textarea report-form" placeholder='Reason for reporting' />
          </div>
          <button onClick={this.handleSubmit} className="button is-outlined">Submit</button>
        </div>
        </div>
      </div>
    );
  }
}

export default ReportForm;