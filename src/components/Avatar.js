import React, { Component } from 'react';
import Image from './main.jpg'

class Avatar extends Component {
  render() {
    return (
      <div className="avatar" style={{ backgroundImage: `url(${Image})` }}></div>
    );
  }
}

export default Avatar;