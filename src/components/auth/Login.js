import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';

class Login extends Component {
  constructor() {
    super();

    const options = {
      // auth: {
      //   redirect: false
      // },
      // socialButtonStyle: 'small',
      theme: {
        primaryColor: '#31324F'
      }
    };

    this._lock = new Auth0Lock(
      'ggQpcrvOq7TcjmoHiBBfpYP4SQRJ1nJQ',
      'crafting-ideas.auth0.com',
      options
    );
  }

  loginButton = {
    padding: '10px',
    width: '150px',
    background: '#00BFFF',
    color: 'white',
    boxShadow: '2px 2px 5px 0px rgba(100,100,100,1)',
    cursor: 'pointer'
  };

  componentDidMount() {
    this._lock.on('authenticated', authResult => {
      window.localStorage.setItem('auth0IdToken', authResult.idToken);
      window.location.reload();
    });
  }

  _isLoggedIn = () => {
    const token = window.localStorage.getItem('auth0IdToken');

    if (token) return true;
    else return false;
  };

  _login = () => {
    this._lock.show();
  };

  _logout = () => {
    window.localStorage.removeItem('auth0IdToken');
    window.location.reload();
  };

  render() {
    return (
      <div style={this.loginButton} onClick={this._login}>
        Login to get started
      </div>
    );
  }
}

export default Login;
