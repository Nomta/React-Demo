import React, { Component } from 'react';
import Avatar from './../../components/Avatar';
import Username from './../../components/Username';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Avatar></Avatar>
        <Username></Username>
      </div>
    );
  }
}

export default Sidebar;