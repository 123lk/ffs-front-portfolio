import React from 'react';
import HomeNewsStoryFeed from './HomeNewsStoryFeed';
import HomeTextArea from './HomeTextArea';
import * as actions from '../../actions/index.js';
import {connect} from 'react-redux';

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

export default connect(null, mapDispatchToProps)(HomePage);