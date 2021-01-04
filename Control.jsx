import React from "react";
import PropTypes from "prop-types";

import styles from "./Quest.module.css";
const Control = ({ text, changeStatus }) => {
  return (
    <button className={styles.control} onClick={changeStatus}>
      {text}
    </button>
  );
};

export default Control;
