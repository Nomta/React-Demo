import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

class TweetList extends Component {
  render() {
    const tweets =
      this.props.tweets && this.props.tweets.length
        ? this.props.tweets.map(tweet => {
          return <Tweet key={ tweet.id } id={ tweet.id }>{ tweet.text }</Tweet>
        })
        : [];
  
    return (
      <ul>{ tweets }</ul>
    );
  }
}

TweetList.propTypes = {
  tweets: PropTypes.array
}

export default TweetList;