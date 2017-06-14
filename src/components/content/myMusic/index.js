import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

// 导入样式
import Style from './index.scss';

class MyMusic extends Component {
  render () {
    return (
      <section className={Style.music}>
        <h1>Music  Developing...</h1>
      </section>
    )
  }
}

export default MyMusic;