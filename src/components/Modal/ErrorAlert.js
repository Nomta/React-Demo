import React from 'react';
import PropTypes from 'prop-types';
import Icon from './../Icon';
import Alert from './Alert';

const ErrorAlert = props => {
  const { display, close, title, confirmText } = props;
  return (
    <Alert display={display} close={close} confirmText={confirmText} title={title}
      icon={<Icon name="error-icon" size="1.4em" color="red" />}>
        { props.children }
    </Alert>
  );
};

ErrorAlert.propTypes = {
  children: PropTypes.string.isRequired,
  confirmText: PropTypes.string,
  title: PropTypes.string,
  display: PropTypes.bool,
  close: PropTypes.func.isRequired
};

ErrorAlert.defaultProps = {
  title: 'Ошибка!'
};

export default ErrorAlert;