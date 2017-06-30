import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import App from './components/App';
import CreateUser from './components/auth/CreateUser';
import NavBar from './components/nav/NavBar';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <BrowserRouter>
      <div>
        <NavBar />
        <div style={style}>
          <Route exact path="/" component={App} />
          <Route path="/create" component={CreateUser} />
        </div>
      </div>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
