import React from 'react';
import style from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <div className={style.message}>{message}</div>;
};
Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
