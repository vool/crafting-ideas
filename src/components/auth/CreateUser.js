import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { graphql, gql } from 'react-apollo';

class CreateUser extends React.Component {
  static propTypes = {
    createUser: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  };

  state = {
    username: ''
  };

  Container = styled.div`
    position: absolute;
    width: 50%;
    height: 400px;
    top: 50%;
    margin-top: -200px;
    padding: 20px;
    background: white;
    box-shadow: 2px 2px 5px 0px rgba(100, 100, 100, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  CreateBtn = styled.button`
    padding: 10px;
    width: 150px;
    margin-top: 20px;
    background: #00bfff;
    color: white;
    border: none;
    cursor: pointer;
  `;

  UserInput = styled.input`
    margin-top: 20px;
    padding: 10px;
    outline: none;
  `;

  createUser = () => {
    const variables = {
      idToken: window.localStorage.getItem('auth0IdToken'),
      email: 'mtyleranton@gmail.com',
      name: 'Tyler Anton',
      username: this.state.username
    };

    this.props
      .createUser({ variables })
      .then(res => {
        this.props.history.replace('/');
      })
      .catch(error => {
        console.error(error);
        this.props.history.replace('/');
      });
  };

  render() {
    if (this.props.data.loading) return <div>Loading...</div>;

    if (
      this.props.data.user ||
      window.localStorage.getItem('auth0IdToken') === null
    ) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    return (
      <this.Container>
        <this.UserInput
          value={this.state.username}
          placeholder="Username"
          onChange={e => this.setState({ username: e.target.value })}
        />

        {this.state.username &&
          <this.CreateBtn onClick={this.createUser}>Sign Up</this.CreateBtn>}
      </this.Container>
    );
  }
}

const createUser = gql`
  mutation(
    $idToken: String!
    $name: String!
    $email: String!
    $username: String!
  ) {
    createUser(
      authProvider: { auth0: { idToken: $idToken } }
      name: $name
      email: $email
      username: $username
    ) {
      id
    }
  }
`;

const userQuery = gql`
  query {
    user {
      id
    }
  }
`;

export default graphql(createUser, { name: 'createUser' })(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
    withRouter(CreateUser)
  )
);
