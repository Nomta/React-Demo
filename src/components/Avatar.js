import React, { Component } from 'react';
import Image from './../assets/images/main.jpg'

class Avatar extends Component {
  render() {
    return (
      <div className="avatar" style={{ backgroundImage: `url(${Image})` }}></div>
    );
  }
}

export default Avatar;