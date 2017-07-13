import React from 'react';
import styled from 'styled-components';
import ProfileCard from './user/ProfileCard';
import IdeaContainer from './ideas/IdeaContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <ProfileCard />
      <IdeaContainer />
    </Container>
  );
};

export default Home;
