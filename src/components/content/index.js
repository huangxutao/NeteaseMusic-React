import React from 'react';
import { Component } from 'react';
import Ajax from '../../assets/js/ajax';

import Style from './index.scss';

class Content extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hotLists: [{
        name: 'hello'
      }]
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList(num) {
    Ajax.get('http://localhost:4001/top/list?idx=1')
      .then((data) => {
        this.setState({
          hotLists: data.result.tracks.slice(0, 12)
        })
      })
  }

  render () {
    return (
      <div className={Style.content}>
        <section className={Style.items}>
          <div className={Style.item}><i className="iconfont icon-tuijian"></i> 个性推荐</div>
          <div className={Style.item}><i className="iconfont icon-gedan"></i> 歌单</div>
          <div className={Style.item}><i className="iconfont icon-diantai"></i> 主播电台</div>
          <div className={Style.item}><i className="iconfont icon-paihangbang"></i> 排行榜</div>
        </section>
      </div>
    )
  }
}

export default Content;