import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, setUserName } from './../actions/userActions';
import Form from './../components/Form';
import Icon from './../components/Icon';

class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.dispatchValue = this.dispatchValue.bind(this);
  }
  
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  handleClick() {
    this.setState({ editable: true });
  }

  dispatchValue(value) {
    this.props.dispatch(setUserName(value));
    this.setState({ editable: false });
  }

  render() {
    return (
      this.state.editable
        ? <Form action={ this.dispatchValue } value={ this.props.name } maxLength="15"></Form>
        : <h2 className="username">
            <span>{ this.props.user && this.props.user.name || 'Без имени'}</span>
            <button className="page-button username-button icon" onClick={this.handleClick}>
              <span className="icon edit-icon">
                <Icon name="edit-icon"/>
              </span>
            </button>
          </h2>
      );
  }
}

function mapStateToProps(state) { console.log('STATE',state.user)
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Username);