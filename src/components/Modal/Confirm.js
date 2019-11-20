import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

class Confirm extends Component {
  render() {
    const buttons = [
      { id: 1, text: this.props.confirmText, handleClick: this.props.confirm },
      { id: 2, text: this.props.cancelText }
    ];
    const { display, close, title } = this.props;
    return (
      <Modal display={ display } close={ close } buttons={ buttons } title={ title }>
          { this.props.children }
      </Modal>
    );
  }
}

Confirm.propTypes = {
  children: PropTypes.node.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  title: PropTypes.string,
  display: PropTypes.bool,
  confirm: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};

Confirm.defaultProps = {
  confirmText: 'Да',
  cancelText: 'Нет'
};

export default Confirm;