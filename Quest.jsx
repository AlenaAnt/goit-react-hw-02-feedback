import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Control from './Control.jsx';
import ColorBox from './ColorBox.jsx';

import styles from './Quest.module.css';
//'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)

class Quest extends Component {
  state = { def: true };
  currentColor = () => {
    const { def } = this.state;
    return def
      ? '#000'
      : '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  };

  changeStatus = () =>
    this.setState(prevState => {
      return { def: !prevState.def };
    });

  render() {
    const { def } = this.state;
    return (
      <div className={styles.container}>
        <ColorBox color={this.currentColor()} />
        <Control
          text={def ? 'Смени цвет' : 'Сброс'}
          changeStatus={this.changeStatus}
        />
      </div>
    );
  }
}

export default Quest;
