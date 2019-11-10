import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
  const { width, height, viewBox } = props;
  const url = '#' + props.name;
  
  return (
    <svg viewBox={ viewBox } width={ width } height={ height }>
      <use xlinkHref={ url }></use>
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number, 
    PropTypes.string
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number, 
    PropTypes.string
  ]),
  viewBox: PropTypes.string
};

Icon.defaultProps = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 64 64'
}

export default Icon;