import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Auth0Lock from 'auth0-lock';
import styled from 'styled-components';

class Login extends React.Component {
  constructor() {
    super();

    this._lock = new Auth0Lock(
      'ggQpcrvOq7TcjmoHiBBfpYP4SQRJ1nJQ',
      'crafting-ideas.auth0.com'
    );
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  LoginBtn = styled.button`
    padding: 10px;
    margin: 10%;
    width: 150px;
    background: #0ebfe9;
    color: white;
    cursor: pointer;
    border: none;
  `;

  componentDidMount() {
    this._lock.on('authenticated', authResult => {
      window.localStorage.setItem('auth0IdToken', authResult.idToken);

      this._lock.getUserInfo(authResult.accessToken, (err, profile) => {
        if (err) return console.log(err);
        console.log(profile);
        window.localStorage.setItem('profile', JSON.stringify(profile));
      });

      this.props.history.push('/signup');
    });
  }

  _login = () => {
    this._lock.show();
  };

  render() {
    return <this.LoginBtn onClick={this._login}>Get Started</this.LoginBtn>;
  }
}

export default withRouter(Login);
