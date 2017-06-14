import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

// 样式导入
import Style from './index.scss';

class FindMusic extends Component {
  render () {
    return (
      <section className={Style.items}>
        <div className={Style.item}><i className="iconfont icon-tuijian"></i> 个性推荐</div>
        <div className={Style.item}><i className="iconfont icon-gedan"></i> 歌单</div>
        <div className={Style.item}><i className="iconfont icon-diantai"></i> 主播电台</div>
        <div className={Style.item}><i className="iconfont icon-paihangbang"></i> 排行榜</div>
      </section>
    )
  }
}

export default FindMusic;