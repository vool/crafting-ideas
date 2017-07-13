import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Idea from './Idea';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const IdeaList = ({ user, ideas }) => {
  return (
    <Container>
      {ideas.map(idea => <Idea key={idea.id} user={user} idea={idea} />)}
    </Container>
  );
};

IdeaList.propTypes = {
  user: PropTypes.object.isRequired,
  ideas: PropTypes.array.isRequired
};

export default IdeaList;
