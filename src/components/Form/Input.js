import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetValue = this.resetValue.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event.target.value);
  }

  handleSubmit(event) {
    if (event.key === 'Enter' && this.props.handleSubmit) {
      this.props.handleSubmit();
    }
  }

  resetValue() {
    this.props.handleChange('');
  }
  
  render() {
    const { attrs } = this.props;
    return (
      <Fragment>
        <input type="text" onChange={this.handleChange} onKeyPress={this.handleSubmit} {...attrs}/>
        <span className="control-edit-button" onClick={ this.resetValue }>&times;</span>
      </Fragment>
    );
  }
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.number, 
    PropTypes.string
  ]),
  maxLength: PropTypes.oneOfType([
    PropTypes.number, 
    PropTypes.string
  ]),
  autoFocus: PropTypes.bool,
  className: PropTypes.string
};

export default Input;