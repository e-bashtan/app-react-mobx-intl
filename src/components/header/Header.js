import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './wth.jpg';
import { HeaderContainer, Logo } from './styles';
import './fade.css';

export default class Header extends Component {
  render() {
    return <HeaderContainer>
      <Logo src={logo} alt="logo"/>
      <h2>Welcome to Hell!</h2>
    </HeaderContainer>
  }
}
