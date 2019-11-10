import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTweet } from './../../actions/tweetActions';

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(deleteTweet(this.props.id));
  }
  
  render() {
    return (
      <li className="page-control">
        <span className="control-text">
          {this.props.children}
        </span>
        <button className="page-button control-button" onClick={this.handleClick}>
          &times;
        </button>
      </li>
    );
  }
}

Tweet.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Tweet);