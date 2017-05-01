import React from 'react';
import ReportForm from './ReportForm';
import '../../css/FormPage.scss';


class FormPage extends React.Component {
    render() {
    return (
      <div className='report-form'>
        <ReportForm />
      </div>
    );
  }
}

export default FormPage;