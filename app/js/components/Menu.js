import React, { Component } from 'react';
import Button from './Button';
import Content from './Content';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: black;
`;

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

  showContent(word){
    this.setState({
      visible: !this.state.visible,
      word: word
    })
  }
  render() {
    const { hello, galaxy } = this.state;
    return (
      <div>
        <Button onClick={()=> this.showContent(hello)}>{hello}</Button>
        <Button onClick={()=> this.showContent(galaxy)}>{galaxy}</Button>
        <Wrapper>
          <Content visible={this.state.visible} word={this.state.word}/>
        </Wrapper>
      </div>
    );
  }
}
