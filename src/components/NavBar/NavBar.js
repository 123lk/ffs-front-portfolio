import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {getTrendsByPopularity} from '../../reducers/trends.reducer';
import '../../css/NavBar.scss';



import UserNav from './UserNav';

class NavBar extends React.Component {
  componentDidMount () {
    this.props.fetchTrends();
  }
  render () {
    return (
        <div className = 'nav-right'>
          <UserNav/>
        </div>
    );
  }
}

NavBar.propTypes = {
  trends: PropTypes.array.isRequired,
  fetchTrends: PropTypes.func.isRequired
};

function mapStateToProps (state) {
  return {
    trends: getTrendsByPopularity(state.trends.trendsById)
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchTrends: () => {
      dispatch(actions.fetchProperTrends());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);