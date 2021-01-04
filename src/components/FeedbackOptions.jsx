import React from 'react';
import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ addFeedback }) => {
  return (
    <>
      <button className={style.btn} onClick={addFeedback}>
        good
      </button>
      <button className={style.btn} onClick={addFeedback}>
        neutral
      </button>
      <button className={style.btn} onClick={addFeedback}>
        bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
