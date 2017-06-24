import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import App from './components/App';
import NavBar from './components/nav/NavBar';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Route exact path="/" component={App} />
        </div>
      </div>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
