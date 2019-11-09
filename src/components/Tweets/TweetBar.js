import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from './../../actions/tweetActions';
import Loader from './../../components/Loader';
import TweetForm from './TweetForm';
import TweetList from './TweetList';

class Tweets extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTweets());
  }

  render() {
    return (
      <div className="tweet-bar">
        <Loader loading={this.props.loading}>
          <TweetForm></TweetForm>
          <TweetList tweets={this.props.tweets}></TweetList>
        </Loader>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets.tweets,
    loading: state.tweets.fetching
  }
}

export default connect(mapStateToProps)(Tweets);