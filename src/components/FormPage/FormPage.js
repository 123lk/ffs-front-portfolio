import React from 'react';
import ReportForm from './ReportForm';
import * as actions from '../../actions/index.js';
import { connect } from 'react-redux';

class FormPage extends React.Component {
    componentDidMount() {
    this.props.fetchTrends();
  }
  render() {
    return (
      <div className='report-form'>
        <ReportForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrends: () => {
      dispatch(actions.fetchTrends());
    }
  };
}

export default connect(null, mapDispatchToProps)(FormPage);