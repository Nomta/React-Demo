import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchTweets, setErrorReadStatus } from './../../actions/tweetActions';
import Loader from './../../components/Loader';
import TweetForm from './TweetForm';
import TweetList from './TweetList';
import ErrorAlert from './../Modal/ErrorAlert';

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.setErrorReadStatus = this.setErrorReadStatus.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchTweets());
  }

  setErrorReadStatus() {
    this.props.dispatch(setErrorReadStatus());
  }

  render() {
    return (
      <Fragment>
        <div className="tweet-bar">
          <Loader loading={this.props.loading}>
            <TweetForm></TweetForm>
            <TweetList tweets={this.props.tweets}></TweetList>
          </Loader>
        </div>
        <ErrorAlert display={ this.props.error } close={ this.setErrorReadStatus }>
          Нет соединения с сетью. Попробуйте еще раз.
        </ErrorAlert>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets.tweets,
    loading: state.tweets.fetching,
    error: !!state.tweets.error && !state.tweets.errorRead
  }
}

export default connect(mapStateToProps)(Tweets);