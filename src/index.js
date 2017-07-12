import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import NavBar from './components/nav/NavBar';
import CreateUser from './components/auth/CreateUser';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <div>
      <NavBar />
      <BrowserRouter>
        <Container>
          <Route exact path="/" component={App} />
          <Route path="/signup" component={CreateUser} />
        </Container>
      </BrowserRouter>
    </div>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
