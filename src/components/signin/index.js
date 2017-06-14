import React from 'react';
import { Component } from 'react';

// 导入样式
import Style from './index.scss';

class Signin extends Component {
  render () {
    return (
      <section className={Style.signin}>
        <form className={Style.box}>
          <div className={Style.close}></div>
          <h1>登录</h1>
          <h2>更精彩</h2>
          <p>
            <input type="text" />
            <label htmlFor="user">邮箱或用户名</label>
          </p>
          <p>
            <input type="password"/>
            <label htmlFor="password">密码</label>
          </p>
          <button>Signin</button>
        </form>
      </section>
    )
  }
}

export default Signin;