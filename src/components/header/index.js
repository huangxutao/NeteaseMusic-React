import React from 'react';
import { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Style from './index.scss';
import Logo from '../../assets/images/logo.png';

class Header extends Component {
  constructor (props) {
    super(props);

    this.state = {

    }
  }
  render () {
    return (
      <header>
        <div className={Style.logo}>
          <Link to="/">
            <img src={Logo} alt="" />
            Cloud Music
          </Link>
        </div>
        <nav className={Style.nav}>
          <NavLink exact to="/" activeClassName={Style.active}>发现音乐</NavLink>
          <NavLink to="/myMusic" activeClassName={Style.active}>我的音乐</NavLink>
          <NavLink to="/friends" activeClassName={Style.active}>朋友</NavLink>
          <NavLink to="/artists" activeClassName={Style.active}>音乐人</NavLink>
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