import React from 'react';
import { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

// 静态资源导入
import Style from './index.scss';
import Logo from '../../assets/images/logo.png';
import Avatar from '../../assets/images/user.png';

class Header extends Component {
  constructor (props) {
    super(props);

    this.state = {
      userAvatarUrl: Avatar
    }
  }

  componentWillMount () {
    let userProfile = JSON.parse(window.localStorage.getItem('ncm-profile'));

    if(userProfile && userProfile.avatarUrl) {
      this.setState({
        userAvatarUrl: userProfile.avatarUrl
      });
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
        <div className={Style.user}>
          <Link to="/myMusic">
            <img src={this.state.userAvatarUrl} alt=""/>
          </Link>
        </div>
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