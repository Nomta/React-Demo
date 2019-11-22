import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchUser, setUserName, setErrorReadStatus } from './../actions/userActions';
import ModalEditor from './ModalEditor/ModalEditor';
import ErrorAlert from './Modal/ErrorAlert';
import Loader from './../components/Loader';

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    
    this.dispatchValue = this.dispatchValue.bind(this);
    this.setErrorReadStatus = this.setErrorReadStatus.bind(this);
  }
  
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  dispatchValue(value) {
    this.props.dispatch(setUserName(value));
  }

  setErrorReadStatus() {
    this.props.dispatch(setErrorReadStatus());
  }

  render() {
    const username = this.props.user && this.props.user.name;
    return (
      <Fragment>
        <h2 className="username">
          <Loader loading={this.props.loading}>
            <span className="username-text">{ username || 'Без имени' }</span>
            <ModalEditor
              action={ this.dispatchValue }
              value={ username || '' }
              title="Ваше имя" 
              maxLength="15"/>
          </Loader>
        </h2>
        <ErrorAlert display={ this.props.error } close={ this.setErrorReadStatus }>
          Нет соединения с сетью. Попробуйте еще раз.
        </ErrorAlert>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    loading: state.user.fetching,
    error: !!state.user.error && !state.user.errorRead
  }
}

export default connect(mapStateToProps)(Username);