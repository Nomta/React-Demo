import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.action(this.state.value);
    this.setState({value: ''});
  }

  handleChange() {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <form className="page-control">
        <input type="text"
          autoFocus
          className="control-text" 
          value={this.state.value}
          maxLength={this.props.maxLength} 
          onChange={this.handleChange} />
        <button className="page-button control-button" onClick={this.handleClick}>+</button>
      </form>
    );
  }
}

Form.propTypes = {
  action: PropTypes.func.isRequired,
  value: PropTypes.string,
  maxLength: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number
  ]) 
}

Form.defaultProps = {
  value: ''
}

export default Form;