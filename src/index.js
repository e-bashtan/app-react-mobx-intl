import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';
import counter from './stores/Counter';
import users from './stores/Users';

const stores = { counter, users };
ReactDOM.render(<Provider { ...stores }>
  <App />
</Provider>, document.getElementById('root'));

registerServiceWorker();
