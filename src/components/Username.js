import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchUser, setUserName } from './../actions/userActions';
import ModalEditor from './ModalEditor/ModalEditor';
import Loader from './../components/Loader';

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.dispatchValue = this.dispatchValue.bind(this);
  }
  
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  dispatchValue(value) {
    this.props.dispatch(setUserName(value));
  }

  render() {
    const username = this.props.user && this.props.user.name;

    return (
      <h2 className="username">
        <Loader loading={this.props.loading}>
          <span className="username-text">{ username || 'Без имени' }</span>
          <ModalEditor
            action={ this.dispatchValue }
            value={ username }
            title="Ваше имя" 
            maxLength="15"/>
        </Loader>
      </h2>
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