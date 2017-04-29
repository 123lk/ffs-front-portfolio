import React from 'react';
import PropTypes from 'prop-types';
import HomeNewsStoryFeed from './HomeNewsStoryFeed';
import HomeTextArea from './HomeTextArea';
import * as actions from '../../actions/index.js';
import {connect} from 'react-redux';
import '../../css/HomePage.scss';

class HomePage extends React.Component {
  componentDidMount () {
    this.props.fetchHome();
  }
  render () {
    return (
      <div>
        <div className="row home-text-area">
          <HomeTextArea/>
        </div>
        <div className="row home-news-story-feed">
          <HomeNewsStoryFeed/>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchHome: () => {
      dispatch(actions.fetchHome());
    }
  };
}

HomePage.propTypes = {
  fetchHome: PropTypes.func.isRequired
};


export default connect(null, mapDispatchToProps)(HomePage);