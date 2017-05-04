import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/index.js';


class VoteButton extends Component {
  render() {
    return (
      <div>
        <a onClick={this.clickHandler.bind(this, this.props.id, 'up')} className='button'>
          <span className="icon">
            <i className="fa fa-arrow-up"></i>
          </span>
        </a>
        {this.props.votes}
        <a className='button' onClick={this.clickHandler.bind(this, this.props.id, 'down')}>
          <span className="icon">
            <i className="fa fa-arrow-down"></i>
          </span>
        </a>
      </div>
    );
  }
  clickHandler(id, vote) {
    this.props.sendVote(id, vote);
  }
}

function mapStateToProps(state) {
  return {
    currentArticle: state.currentArticle
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendVote: (id, vote) => {
      dispatch(actions.voteComment(id, vote));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(VoteButton);