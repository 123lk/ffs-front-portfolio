import React from 'react';
import PropTypes from 'prop-types';
import DomainApprovedFeed from './DomainApprovedFeed';
import DomainPendingFeed from './DomainPendingFeed';
import DomainData from './DomainData';
import * as actions from '../../actions/index.js';
import { connect } from 'react-redux';
import {getArticlesInOrder} from '../../reducers/domain.reducer';
import '../../css/DomainPage.scss';


class DomainPage extends React.Component {
  componentDidMount() {
    this.props.fetchDomain(this.props.params.id);
  }
  render() {
    return (
      <div>
        <div className="domain-text-area">
          <DomainData {...this.props.domainData}/>
        </div>
        <div className="domain-approved-feed">
          <DomainApprovedFeed articles={this.props.articles}/>
        </div>
        <div className="domain-pending-feed">
          <DomainPendingFeed articles={this.props.articles}/>
        </div>
      </div>
    );
  }
}

DomainPage.propTypes = {
  domainData: PropTypes.shape({
    organisationName: PropTypes.string,
    domainDescription: PropTypes.string,
  }),
  articles: PropTypes.array.isRequired,
  fetchDomain: PropTypes.func.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

function mapStateToProps(state) {
  return {
    domainData: state.domain.domainData,
    articles: getArticlesInOrder (state.domain.domainArticlesById)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDomain: (id) => {
      dispatch(actions.fetchDomain(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DomainPage);