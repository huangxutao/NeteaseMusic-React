import React from 'react';
import { Component } from 'react';

import Style from './index.scss';

// 子组件导入
import AudioPlayer from '../audioPlayer/index.js';

class Footer extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <footer>
        <AudioPlayer />
      </footer>
    )
  }
}

export default Footer;