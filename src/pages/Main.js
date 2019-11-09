import React, { Component } from 'react';
import Sidebar from './../components/Sidebar/Sidebar';
import Tweets from '../components/Tweets/TweetBar';

class Main extends Component {
  render() {
    return (
      <main className="page-main">
        <Sidebar></Sidebar>
        <Tweets></Tweets>
      </main>
    );
  }
}

export default Main;