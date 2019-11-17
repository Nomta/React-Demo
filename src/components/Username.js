import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchUser, setUserName } from './../actions/userActions';
import Icon from './../components/Icon';
import Modal from './Modal/Modal';

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      editable: false 
    };

    this.changeValue = this.changeValue.bind(this);
    this.dispatchValue = this.dispatchValue.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  changeValue(event) {
    this.setState({ username: event.target.value });
  }

  dispatchValue() {
    this.props.dispatch(setUserName(this.state.username));
  }

  openModal() {
    this.setState({ editable: true });
  }

  closeModal() {
    this.setState({ editable: false });
  }

  render() {
    const username = this.props.user && this.props.user.name;
    const buttons = [
      { id: 1, text: 'Да', handler: this.dispatchValue }, 
      { id: 2, text: 'Нет' }
    ];

    return (
      <Fragment>
        <h2 className="username">
          <span className="username-text">{ username || 'Без имени' }</span>
          <button className="page-button username-button icon" onClick={ this.openModal }>
            <span className="icon edit-icon">
              <Icon name="edit-icon"/>
            </span>
          </button>
        </h2>
        <Modal display={ this.state.editable } close={ this.closeModal } buttons={ buttons } title="Ваше имя">
          <div className="page-control">
            <input type="text"
              autoFocus
              defaultValue={ username }
              onChange={ this.changeValue } 
              className="control-text" 
              maxLength="15" />
          </div>
        </Modal>
      </Fragment>
      );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Username);