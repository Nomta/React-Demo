import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Confirm from './Confirm';
import Input from './../Form/Input'

class Dialog extends Component {
  render() {
    const { value, confirm, handleChange, maxLength, ...props } = this.props;
    const attrs = { value, maxLength, className: "control-text", autoFocus: true }
    return (
      <Confirm confirm={ confirm } { ...props }>
        { this.props.children }
        <div className="page-control dialog-control">
          <Input
            handleChange={ handleChange } 
            handleSubmit={ confirm }
            attrs={ attrs }/>
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