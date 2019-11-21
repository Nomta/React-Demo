import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from './../Icon';
import Dialog from './../Modal/Dialog';

class ModalEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      editable: false, 
      value: this.props.value 
  };

    this.changeValue = this.changeValue.bind(this);
    this.resetValue = this.resetValue.bind(this);
    this.dispatchValue = this.dispatchValue.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  changeValue(value) {
    this.setState({ value });
  }
  
  resetValue() {
    this.setState({ value: this.props.value });
  }

  dispatchValue() {
    if (this.state.value === this.props.value) {
      return;
    }
    this.props.action(this.state.value)
  }

  openModal() {
    this.setState({ editable: true });
  }

  closeModal() {
    this.setState({ editable: false });
  }

  
  render() {
    return (
      <Fragment>
        <button className="page-button modal-editor-button icon" onClick={ this.openModal }>
          <span className="icon edit-icon">
            <Icon name="edit-icon"/>
          </span>
        </button>
        <Dialog 
          display={ this.state.editable } 
          close={ this.closeModal } 
          confirm={ this.dispatchValue } 
          cancel={ this.resetValue }
          handleChange={ this.changeValue } 
          value={ this.state.value }
          title={ this.props.title }
          maxLength={ this.props.maxLength }>
            { this.props.children }
        </Dialog>
      </Fragment>
    );
  }
}

ModalEditor.propTypes = {
  action: PropTypes.func.isRequired,
  value: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
  maxLength: PropTypes.oneOfType([
    PropTypes.number, 
    PropTypes.string
  ])
};

export default ModalEditor;