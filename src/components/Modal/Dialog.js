import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Confirm from './Confirm';
import Input from './../Form/Input'

class Dialog extends Component {
  render() {
    const { display, close, confirm, cancel, title, confirmText, cancelText, value, handleChange, maxLength } = this.props;
    return (
      <Confirm display={ display } close={ close } confirm={ confirm } cancel={ cancel } title={ title } confirmText={ confirmText } cancelText={ cancelText }>
        { this.props.children }
        <div className="page-control dialog-control">
          <Input autoFocus
            className="control-text" 
            value={ value }
            handleChange={ handleChange } 
            handleSubmit={ confirm }
            maxLength={ maxLength }/>
        </div>
      </Confirm>
    );
  }
}

Dialog.propTypes = {
  children: PropTypes.string,
  display: PropTypes.bool,
  confirm: PropTypes.func.isRequired,
  cancel: PropTypes.func,
  close: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.oneOfType([
    PropTypes.number, 
    PropTypes.string
  ])
};

export default Dialog;