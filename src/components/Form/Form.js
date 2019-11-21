import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input'

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

  handleChange(value) {
    this.setState({ value });
  }
  
  render() {
    const attrs = {
      value: this.state.value,
      maxLength: this.props.maxLength,
      className: "control-text control-text-plus",
      autoFocus: true
    }
    return (
      <form className="page-control">
        <Input attrs={ attrs } 
          handleChange={this.handleChange}/>
        {/* <input type="text"
          autoFocus
          className="control-text control-text-plus" 
          value={this.state.value}
          maxLength={this.props.maxLength} 
          onChange={this.handleChange} /> */}
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