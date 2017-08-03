import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Counter from '../../components/counter/Counter';
import CreateUser from '../../components/createUser/CreateUser';

import List from '../list/List';
import Users from '../users/Users';
import { inject, observer } from 'mobx-react';
import {AppContainer, AppContent} from './styles';
import './App.css';

@inject("counter", "users") @observer
class App extends Component {
  render() {
    const {counter, users} = this.props;

    return (
      <AppContainer>
        <Header />
        <AppContent>
          <List/>
          <Counter increment={counter.increment} decrement={counter.decrement} isOdd={counter.isOdd} count={counter.count}/>
          <CreateUser onAdd={users.addUser}/>
          <Users users={users}/>
        </AppContent>
      </AppContainer>
    );
  }
}

export default App;
