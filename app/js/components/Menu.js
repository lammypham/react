import React, { Component } from 'react';
import Button from './Button';
import Content from './Content'

export default class Menu extends Component {

  constructor(props){
    super(props)
    this.state = {
      hello: 'hello',
      galaxy: 'galaxy',
      visible: false
    }
    this.showContent = this.showContent.bind(this);
  }

  showContent(){
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    const { hello, galaxy } = this.state;
    return (
      <div>
        <Button onClick={this.showContent}>{hello}</Button>
        <Button>{galaxy}</Button>
        <Content visible={this.state.visible}/>
      </div>
    );
  }
}
