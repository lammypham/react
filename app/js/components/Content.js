import React, { Component } from 'react';
import Jumbotron from './Jumbotron';

export default class Content extends Component {

  constructor(props){
    super(props)
  }

  render() {

    const displayState = this.props.visible ? {display: '', color: 'white'} : {display: 'none'};

    return (
      <div style={displayState}>
          <Jumbotron>{this.props.word}</Jumbotron>
      </div>
    );
  }
}
