import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }
  
  close() {
    this.props.cancel();
    this.props.close();
  }
  
  render() {
    const buttons = [
      { id: 1, text: this.props.confirmText, handleClick: this.props.confirm },
      { id: 2, text: this.props.cancelText }
    ];
    return (
      <Modal display={ this.props.display } close={ this.close } title={ this.props.title } buttons={ buttons }>
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
  cancel: PropTypes.func,
  close: PropTypes.func.isRequired
};

Confirm.defaultProps = {
  confirmText: 'Да',
  cancelText: 'Нет'
};

export default Confirm;