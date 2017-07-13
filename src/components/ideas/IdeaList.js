import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { graphql, gql } from 'react-apollo';
import styled from 'styled-components';
import Idea from './Idea';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const IdeaList = ({ data }) => {
  if (data.loading) return <div>Loading...</div>;

  const ideas = data.user.ideas;
  const user = data.user;

  return (
    <Container>
      {ideas.map(idea => <Idea key={idea.id} user={user} idea={idea} />)}
    </Container>
  );
};

IdeaList.propTypes = {
  data: PropTypes.object.isRequired
};

const ideasQuery = gql`
  query allIdeas {
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

export default graphql(ideasQuery, {
  options: { fetchPolicy: 'network-only' }
})(withRouter(IdeaList));
