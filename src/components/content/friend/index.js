import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

// 导入样式
import Style from './index.scss';

class Friend extends Component {
  constructor (props) {
    super(props);

    console.log('from fa', this)
  }
  render () {
    return (
      <section className={Style.friends}>
        <h1>Friends  Developing... </h1>
      </section>
    )
  }
}

export default Friend;