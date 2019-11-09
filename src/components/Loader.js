import React, { Component, Fragment } from 'react';

const dots = Array.from({ length: 4 }, (item, i) => (
  <div className="loader-el" key={i}></div>
));

class Loader extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div className="page-loader">
          <div className="loader-container">
            <div className="loader-row">
              {dots}
            </div>
          </div>
        </div>
      );
    }
    return (
      <Fragment>{ this.props.children }</Fragment>
    );
  }
}

export default Loader;