import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={style.block_btn}>
      <div>
        Good:
        <span>{good}</span>
      </div>
      <div>
        Neutral:
        <span>{neutral}</span>
      </div>
      <div>
        Bad:
        <span>{bad}</span>
      </div>
      <div>
        Total: <span>{total}</span>
      </div>

      {!!total && (
        <div>
          Positive feedback:
          <span>{positivePercentage} %</span>
        </div>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
