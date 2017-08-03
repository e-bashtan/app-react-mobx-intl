import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './wth.jpg';
import { HeaderContainer, Logo, H2 } from './styles';
import './fade.css';

export default class Header extends Component {
  render() {
    return <HeaderContainer>
      <Logo src={logo} alt="logo"/>
      <H2>Something about header</H2>
    </HeaderContainer>
  }
}
