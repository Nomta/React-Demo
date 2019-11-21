import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalButton from './ModalButton';

class Modal extends Component {
  render() { 
    const buttons = this.props.buttons && this.props.buttons.map(button => (
      <ModalButton key={ button.id } handleClick={ button.handleClick } close={ this.props.close }>
        { button.text }
      </ModalButton>
    ));
    return (
      this.props.display
        ? <div className="modal-layer" onClick={ this.props.close }>
            <div className="modal" onClick={ event => event.stopPropagation() }>
              { this.props.title && <h3 className="modal-title">
                { this.props.icon }
                { this.props.title }
              </h3> }
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
  icon: PropTypes.node,
  display: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object)
}

export default Modal;