import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import Ajax from '../../assets/js/ajax';

// 样式
import Style from './index.scss';

// 子组件导入
import FindMusic from './findMusic';
import MyMusic from './myMusic';
import Friend from './friend';
import Artist from './artist';

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
        <Route exact path="/" component={FindMusic} />
        <Route path="/myMusic" component={MyMusic} />
        <Route path="/friends" component={Friend} />
        <Route path="/artists" component={Artist} />
      </div>
    )
  }
}

export default Content;