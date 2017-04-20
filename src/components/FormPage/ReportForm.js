import React from 'react';

class ReportForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>URL of potential fake news article</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>supporting information</label>
            <textarea className="form-control" rows="8" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default ReportForm;