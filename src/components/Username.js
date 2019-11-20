import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchUser, setUserName } from './../actions/userActions';
import Icon from './../components/Icon';
import Dialog from './Modal/Dialog';
import Loader from './../components/Loader';

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

    return (
      <Fragment>
        <h2 className="username">
          <Loader loading={this.props.loading}>
            <span className="username-text">{ username || 'Без имени' }</span>
            <button className="page-button username-button icon" onClick={ this.openModal }>
              <span className="icon edit-icon">
                <Icon name="edit-icon"/>
              </span>
              </button>
          </Loader>
        </h2>
        <Dialog 
          display={ this.state.editable } 
          close={ this.closeModal } 
          confirm={ this.dispatchValue } 
          handleChange={ this.changeValue } 
          defaultValue={ username }
          title="Ваше имя" 
          maxLength="15" >
        </Dialog>
      </Fragment>
      );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    loading: state.user.fetching
  }
}

export default connect(mapStateToProps)(Username);