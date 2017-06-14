import React from 'react';
import { Component } from 'react';

import Style from './index.scss';

class AudioPlayer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      play: false,
      mute: true
    }
  }

  // 播放控制
  togglePlay() {
    this.setState({
      play: !this.state.play
    })
  }

  // 静音控制
  toggleVolume() {
    this.setState({
      mute: !this.state.mute
    })
  }

  render () {
    return (
      <div className={Style.box}>
        <div className={Style.progress}>
          <div className={Style.curr}></div>
          <span></span>
        </div>
        <div className={Style.menus}>
          <div 
            className={
              Style.play + ' ' + (this.state.play ?  Style.stop : Style.start)
            }
            onClick={this.togglePlay.bind(this)}></div>
          <div className={Style.passed}>0:00</div>
          <div className={Style.lyric}>
            No Song In The Box
          </div>
          <div className={Style.wait}>-3:33</div>
          <div 
            className={
              Style.volume + ' ' + (this.state.mute ?  Style.mute : '')
            }
            onClick={this.toggleVolume.bind(this)}>
            <div className={Style.value}>
              <div className={Style.curr}></div>
              <span></span>
            </div>
            <i className="iconfont icon-volume"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default AudioPlayer;