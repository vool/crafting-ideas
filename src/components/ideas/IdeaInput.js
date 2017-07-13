import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { graphql, gql } from 'react-apollo';

class IdeaInput extends React.Component {
  static propTypes = {
    createIdea: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  };

  state = {
    name: ''
  };

  Input = styled.input`
    border: none;
    margin: 5%;
    width: 90%;
    padding: 3%;
    border-radius: 5px;
    outline: none;
  `;

  handleSubmit = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.createIdea();
      this.setState({ name: '' });
    }
  };

  createIdea = () => {
    const variables = {
      name: this.state.name,
      userId: this.props.data.user.id
    };

    this.props.createIdea({ variables }).then(res => {
      window.location.reload();
    });
  };

  render() {
    return (
      <this.Input
        placeholder="Brind your idea to life"
        value={this.state.name}
        onChange={e => this.setState({ name: e.target.value })}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

const createIdea = gql`
  mutation createIdea($name: String!, $userId: ID!) {
    createIdea(name: $name, userId: $userId) {
      name
    }
  }
`;

const userQuery = gql`
  query userQuery {
    user {
      id
    }
  }
`;

export default graphql(createIdea, { name: 'createIdea' })(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
    withRouter(IdeaInput)
  )
);
