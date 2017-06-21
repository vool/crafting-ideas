import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { getIdeas } from './actions/ideasActions';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

const ideas = [
  {
    value: 'This is a really cool idea!',
    owner: {
      name: 'Tyler Anton',
      username: 'tyleranton'
    }
  },
  {
    value: 'This is another really cool idea!',
    owner: {
      name: 'Tyler Anton',
      username: 'tyleranton'
    }
  },
  {
    value: 'This is yet another a really cool idea!',
    owner: {
      name: 'Tyler Anton',
      username: 'tyleranton'
    }
  }
];

store.dispatch(getIdeas(ideas));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
