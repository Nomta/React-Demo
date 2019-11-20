import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Alert = props => {
  const buttons = [{ id: 1, text: props.confirmText }];
  const { display, close, title, icon } = props;
  return (
    <Modal display={ display } close={ close } buttons={ buttons } title={ title } icon={ icon }>
        { props.children }
    </Modal>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  confirmText: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.node,
  display: PropTypes.bool,
  close: PropTypes.func.isRequired
};

Alert.defaultProps = {
  confirmText: 'Да'
};

export default Alert;