import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  return (
    <div className="control-text-block">
      <input type="text"
          autoFocus
          className="control-text" 
          value={props.value}
          maxLength={props.maxLength} 
          onChange={props.handleChange} />
    </div>
  );
};

Input.propTypes = {
  // value: PropTypes.oneOfType(
  //   PropTypes.number,
  //   PropTypes.string
  // ),
  // maxLength: PropTypes.oneOfType(
  //   PropTypes.number,
  //   PropTypes.string
  // ),
  handleChange: PropTypes.func
};

export default Input;