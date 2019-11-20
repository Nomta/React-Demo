import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
  const { width = props.size, height = props.size, viewBox, color } = props;
  const url = '#' + props.name;
  
  return (
    <svg viewBox={ viewBox } width={ width } height={ height } fill={ color }>
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
  size: PropTypes.oneOfType([
    PropTypes.number, 
    PropTypes.string
  ]),
  viewBox: PropTypes.string,
  color: PropTypes.string
};

Icon.defaultProps = {
  size: '1em',
  viewBox: '0 0 64 64',
  color: 'currentColor'
}

export default Icon;