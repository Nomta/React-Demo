import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalButton extends Component {
  clickHandler() {
    if (this.handler) {
      this.props.handler();
    }
    this.props.close();
  }
  render() {
    return (
      <button onClick={ this.props.clickHandler } className="modal-button">
        {this.props.children}
      </button>
    );
  }
}

ModalButton.propTypes = {
  children: PropTypes.string.isRequired,
  handler: PropTypes.func,
  close: PropTypes.func.isRequired
};

export default ModalButton;