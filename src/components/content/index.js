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
        <section>
          <div className={Style.item}>
            <h1>云音乐热歌榜</h1>
            {
              this.state.hotLists.map(n => {
                return <p> {n.name} </p>
              })
            }
          </div>
        </section>
      </div>
    )
  }
}

export default Content;