import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTweet } from './../../actions/tweetActions';
import Form from './../Form/Form';

class TweetForm extends Component {
  constructor(props) {
    super(props);
    this.dispatchValue = this.dispatchValue.bind(this);
  }

  dispatchValue(value) {
    if (value) {
      this.props.dispatch(addTweet(value));
    }
  }
  
  render() {
    return (
      <Form action={ this.dispatchValue } maxLength="80"></Form>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(TweetForm);