import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    if (this.props.handleClick && typeof this.props.handleClick === 'function') {
      this.props.handleClick();
    }
    this.props.close();
  }
  render() {
    return (
      <button onClick={ this.handleClick } className="modal-button">
        { this.props.children }
      </button>
    );
  }
}

ModalButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired, 
    PropTypes.number.isRequired
  ]),
  handleClick: PropTypes.func,
  close: PropTypes.func.isRequired
};

export default ModalButton;