import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { graphql, gql } from 'react-apollo';

class CreateUser extends React.Component {
  static propTypes = {
    createUser: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  };

  state = {
    username: ''
  };

  createUserContainer = {
    position: 'absolute',
    width: '50%',
    height: '400px',
    top: '50%',
    marginTop: '-200px',
    padding: '20px',
    background: 'white',
    boxShadow: '2px 2px 5px 0px rgba(100,100,100,1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  createUserButton = {
    padding: '10px',
    width: '150px',
    marginTop: '20px',
    background: '#00BFFF',
    color: 'white',
    boxShadow: '2px 2px 5px 0px rgba(100,100,100,1)',
    border: 'none',
    cursor: 'pointer'
  };

  inputStyle = {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '50px',
    // width: '100%',
    outline: 'none'
  };

  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>;
    }

    if (
      this.props.data.user ||
      window.localStorage.getItem('auth0IdToken') === null
    ) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    return (
      <div style={this.createUserContainer}>
        <input
          style={this.inputStyle}
          value={this.state.username}
          placeholder="Username"
          onChange={e => this.setState({ username: e.target.value })}
        />

        {this.state.username &&
          <button style={this.createUserButton} onClick={this.createUser}>
            Sign up
          </button>}
      </div>
    );
  }

  createUser = () => {
    const variables = {
      idToken: window.localStorage.getItem('auth0IdToken'),
      email: 'mtyleranton@gmail.com',
      name: 'Tyler Anton',
      username: this.state.username
    };
    console.log(variables);

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
}

const createUser = gql`
  mutation ($idToken: String!, $name: String!, $email: String!, $username: String!){
    createUser(authProvider: {auth0: {idToken: $idToken}}, name: $name, email: $email, username: $username) {
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
