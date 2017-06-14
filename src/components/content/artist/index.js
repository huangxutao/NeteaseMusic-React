import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

// 导入样式
import Style from './index.scss';

class Artist extends Component {
  render () {
    return (
      <section className={Style.artists}>
        <h1>Artist Developing...</h1>
      </section>
    )
  }
}

export default Artist;