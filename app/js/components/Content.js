import React, { Component } from 'react';

export default class Content extends Component {

  constructor(props){
    super(props)
  }

  render() {

    const displayState = this.props.visible ? {display: ''} : {display: 'none'};



    return (
      <div style={displayState}>
         Hello
      </div>
    );
  }
}
