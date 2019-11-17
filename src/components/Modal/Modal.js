import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalButton from './ModalButton';

class Modal extends Component {
  render() { 
    const buttons = this.props.buttons && this.props.buttons.map(button => (
      <ModalButton key={ button.id } handler={ button.handler } close={ this.props.close }>
        { button.text }
      </ModalButton>
    ));
    return (
      this.props.display
        ? <div>
            <div className="modal-layer" onClick={ this.props.close }></div>
            <div className="modal">
              { this.props.title && <h4 className="modal-title">{ this.props.title }</h4> }
              { this.props.children }
              { buttons && <div className="modal-buttons">{ buttons }</div> }
              <span className="close-icon" onClick={ this.props.close }>&times;</span>
            </div>
          </div>
        : null
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  buttons: PropTypes.array,
  display: PropTypes.bool,
  close: PropTypes.func
}

export default Modal;