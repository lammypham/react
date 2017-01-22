import React, { Component } from 'react';
import Button from './Button';
import Main from './Main';
import Content from './Content';
import { ThemeProvider } from 'styled-components'
import Grid from 'grid-styled'
import Navigation from './Navigation';

export default class Menu extends Component {

  constructor(props){
    super(props)
    this.state = {
      about: 'about',
      barista: 'barista',
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
    const { about, barista } = this.state;
    return (
      <ThemeProvider
        theme={{
          gutter: 0,
          breakpoints: {
            small: '32em',
            medium: '48em',
            large: '64em'
          }
        }}>

        <div>

          <Navigation>
            <Grid sm={1/6}>
              <Button onClick={()=> this.showContent(about)}>{about}</Button>
            </Grid>

            <Grid sm={5/6}>
              <Button onClick={()=> this.showContent(barista)}>{barista}</Button>
            </Grid>
          </Navigation>

          <Main>
            <Grid sm={6/6}>
            <Content visible={this.state.visible} word={this.state.word}/>
            </Grid>
          </Main>

        </div>
      </ThemeProvider>

    );
  }
}
