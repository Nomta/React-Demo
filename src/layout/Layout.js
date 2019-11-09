import React, { Component } from 'react';
import Main from './../pages/Main'

class Layout extends Component {
  render() {
    return (
      <div className="page-container">
        <header className="page-header"></header>
        <Main></Main>
        <footer className="page-footer"></footer>
      </div>
    );
  }
}

export default Layout;