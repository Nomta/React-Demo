import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Confirm from './Confirm';

class Dialog extends Component {
  render() {
    const { display, close, confirm, title, confirmText, cancelText, defaultValue, handleChange, maxLength } = this.props;
    return (
      <Confirm display={ display } close={ close } confirm={ confirm } title={ title } confirmText={ confirmText } cancelText={ cancelText }>
        { this.props.children }
        <div className="page-control dialog-control">
          <input type="text" autoFocus
            className="control-text" 
            defaultValue={ defaultValue }
            onChange={ handleChange } 
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
  close: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  defaultValue: PropTypes.string,
  maxLength: PropTypes.oneOfType([
    PropTypes.number, 
    PropTypes.string
  ])
};

export default Dialog;