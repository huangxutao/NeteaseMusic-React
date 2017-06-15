import React from 'react';
import { Component } from 'react';

// 导入样式
import Style from './index.scss';

// 导入 Ajax 方法
import Ajax from '../../assets/js/ajax';

class Signin extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: '',
      password: '',
      userInput: false,
      passwordInput: false,
      loading: false,
      closed: false,
      signinFail: false
    }
  }

  // 关闭登录框
  closeSigninBox () {
    this.setState({
      closed: true
    })
  }

  // 停止冒泡
  stopPropagation (e) {
    e.stopPropagation();
  }

  // 输入处理
  changeHandler (e) {
    let newState = {};
    let target = e.target;
    let name = target.name;
    let value = target.value;

    newState[name + 'Input'] = !value ? false : true;
    newState[name] = value;
    this.setState(newState);
  }

  // 提交处理
  submitHandler (e) {
    e.preventDefault()
    let state = this.state;

    this.doSignin(state.user, state.password);
    this.setState({
      loading: true
    })
  }

  // 登录
  doSignin (user, password) {
    let url = `http://localhost:4001/login/cellphone?phone=${user}&password=${password}`;

    Ajax.get(url).then(res => {
      this.setState({
        loading: false
      });

      if(res.code === 200) {
        this.closeSigninBox();
        window.localStorage.setItem('ncm-account', JSON.stringify(res.account))
        window.localStorage.setItem('ncm-profile', JSON.stringify(res.profile))
      } else {
        this.setState({
          signinFail: true
        })
      }

      console.log(res)
    })
  }

  render () {
    return (
      <section
        className={
          this.state.closed 
            ? Style.signin + ' ' + Style.hide
            : Style.signin
        }
        onClick={this.closeSigninBox.bind(this)}>
        <form
          className={
            this.state.closed 
              ? Style.form + ' ' + Style.closed
              : Style.form
          }
          onClick={this.stopPropagation}
          onSubmit={this.submitHandler.bind(this)}>
          <div className={Style.closeMenu} onClick={this.closeSigninBox.bind(this)}></div>
          <h1>登录</h1>
          <h2>更精彩</h2>
          <p>
            <input type="text" name="user" required onChange={this.changeHandler.bind(this)} />
            <label htmlFor="user" className={
              this.state.userInput ? Style.active : ''
            }>手机号登录</label>
            <span></span>
          </p>
          <p>
            <input type="password" name="password" required onChange={this.changeHandler.bind(this)} />
            <label htmlFor="password" className={
              this.state.passwordInput ? Style.active : ''
            }>密码</label>
            <span></span>
          </p>
          {
            this.state.signinFail
              ? <p className={Style.warning}>登录失败</p>
              : ''
          }
          <button>
            {
              this.state.loading
                ? <i className="iconfont icon-loading"></i>
                : 'Signin'
            }
          </button>
        </form>
      </section>
    )
  }
}

export default Signin;