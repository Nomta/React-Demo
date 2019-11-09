import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from './../../actions/tweetActions';
import TweetForm from './TweetForm';
import TweetList from './TweetList';

class Tweets extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTweets());
  }

  render() {
    return (
      <div className="tweet-bar">
        <TweetForm></TweetForm>
        <TweetList tweets={this.props.tweets}></TweetList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets.tweets
  }
}

export default connect(mapStateToProps)(Tweets);