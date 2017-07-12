import React from 'react';
import PropTypes from 'prop-types';
import { graphql, gql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import logo from './assets/images/LA.png';
import Login from './components/auth/Login';
import ProfileCard from './components/user/ProfileCard';

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5%;
`;

const Welcome = styled.div`
  width: 30%;
  padding: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  height: 35px;
  margin: 20px;
`;

const renderLoggedIn = () => {
  return <ProfileCard />;
};

const renderLoggedOut = () => {
  return (
    <Welcome>
      <h1>Crafting Ideas</h1>
      <Logo src={logo} alt="Logo" />
      <span>
        <em>Ideas are fragile; nourish them</em>
      </span>
      <Login />
    </Welcome>
  );
};

const App = ({ data }) => {
  if (data.loading) <div>Loading...</div>;

  return (
    <Container>
      {data.user ? renderLoggedIn() : renderLoggedOut()}
    </Container>
  );
};

App.propTypes = {
  data: PropTypes.object.isRequired
};

const userQuery = gql`
  query userQuery {
    user {
      id
    }
  }
`;

export default graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
  withRouter(App)
);
