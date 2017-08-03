import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import counter from '../../stores/Counter';
import users from '../../stores/Users';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App counter={counter} users={users}/>, div);
});
