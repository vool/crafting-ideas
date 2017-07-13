import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { graphql, gql } from 'react-apollo';
import styled from 'styled-components';
import IdeaInput from './IdeaInput';
import IdeaList from './IdeaList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const IdeaContainer = ({ data, createIdea }) => {
  if (data.loading) return <div>Loading...</div>;

  const user = data.user;
  const ideas = data.user.ideas;

  return (
    <Container>
      <IdeaInput userId={user.id} createIdea={createIdea} />
      <IdeaList user={user} ideas={ideas} />
    </Container>
  );
};

IdeaContainer.propTypes = {
  data: PropTypes.object.isRequired,
  createIdea: PropTypes.func.isRequired
};

const createIdea = gql`
  mutation createIdea($name: String!, $userId: ID!) {
    createIdea(name: $name, userId: $userId) {
      id
      createdAt
      name
    }
  }
`;

const ideasQuery = gql`
  query {
    user {
      id
      name
      username
      ideas(orderBy: createdAt_DESC) {
        id
        createdAt
        name
      }
    }
  }
`;

export default graphql(createIdea, {
  name: 'createIdea',
  options: {
    update: (store, { data: { createIdea } }) => {
      const data = store.readQuery({ query: ideasQuery });
      data.user.ideas.unshift(createIdea);
      store.writeQuery({ query: ideasQuery, data });
    }
  }
})(
  graphql(ideasQuery, { options: { fetchPolicy: 'network-only' } })(
    withRouter(IdeaContainer)
  )
);
