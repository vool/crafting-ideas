import React from 'react';
import styled from 'styled-components';

class NavBar extends React.Component {
  Nav = styled.nav`
    position: fixed;
    width: 100%;
    background-color: rgba(51, 56, 64, 0.98);
    color: white;
    font-weight: 600;
    padding: 20px;
    z-index: 9999;
  `;

  HomeNav = styled.div`
    display: inline-block;
    font-size: 1.2em;
    margin: 5px;
    cursor: pointer;
    color: white;

    &:hover {
      color: #61dafb;
    }
  `;

  NavItem = styled.div`
    position: absolute;
    top: 35%;
    right: 5%;
  `;

  Logout = styled.a`
    text-decoration: none;
    color: white;
    font-size: 1.1em;
    cursor: pointer;
  `;

  _logout = () => {
    window.localStorage.removeItem('auth0IdToken');
    window.location.reload();
  };

  render() {
    return (
      <this.Nav>
        <this.HomeNav>
          <span>CRAFTING IDEAS</span>
        </this.HomeNav>
        <this.NavItem>
          <this.Logout onClick={this._logout}>Logout</this.Logout>
        </this.NavItem>
      </this.Nav>
    );
  }
}

export default NavBar;
