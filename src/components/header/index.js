import React from 'react';
import { Component } from 'react';

import Style from './index.scss';
import Logo from '../../assets/images/logo.png';

class Header extends Component {
  render () {
    return (
      <header>
        <div className={Style.logo}>
          <img src={Logo} alt="" />
          Netease Music
        </div>
        <nav className={Style.nav}>
          <a href="" className={Style.active}>发现音乐</a>
          <a href="">我的音乐</a>
          <a href="">朋友</a>
          <a href="">音乐人</a>
        </nav>
        <div className={Style.search}>
          <label htmlFor="">
            <i className="iconfont icon-search"></i>
            <input type="text" placeholder="单曲 / 歌手 / 专辑 / MV / 用户" />
          </label>
        </div>
      </header>
    )
  }
}

export default Header;