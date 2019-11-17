import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler() {
    if (this.props.handler && typeof this.props.handler === 'function') {
      this.props.handler();
    }
    this.props.close();
  }
  render() {
    return (
      <button onClick={ this.clickHandler } className="modal-button">
        {this.props.children}
      </button>
    );
  }
}

ModalButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired, 
    PropTypes.number.isRequired
  ]),
  handler: PropTypes.func,
  close: PropTypes.func.isRequired
};

export default ModalButton;