import React from 'react';
import '../../css/ReportForm.scss';

class ReportForm extends React.Component {
  render() {
    return (
      <div>
        <div className='intro'>
          <h3>Report an Article</h3>
          <p>If you come across an article that you know to be false, this is the place to report it</p>
          <div className="field">
            <input type="text" className="input" placeholder='URL of article' />
          </div>
          <div className="field">
            <textarea rows='20' className="textarea" placeholder='Reason for reporting' />
          </div>
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    );
  }
}

export default ReportForm;