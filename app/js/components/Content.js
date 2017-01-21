import React, { Component } from 'react';

export default class Content extends Component {

  constructor(props){
    super(props)
  }

  render() {

    const displayState = this.props.visible ? {display: '', color: 'white'} : {display: 'none'};

    return (
      <div style={displayState}>
         {this.props.word}
      </div>
    );
  }
}
