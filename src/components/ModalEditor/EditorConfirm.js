import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Confirm from './../Modal/Confirm';

class EditorConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = { editable: false }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
        <button className={ this.props.className } onClick={ this.openModal }>
          { this.props.button }
        </button>
        <Confirm 
          confirm={ this.props.action } 
          close={ this.closeModal } 
          display={ this.state.editable } 
          title={ this.props.title }>
            { this.props.children }
        </Confirm>
      </Fragment>
    );
  }
}

EditorConfirm.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  button: PropTypes.node
};

export default EditorConfirm;