import React from 'react';
import styled from 'styled-components';
import ProfileCard from './user/ProfileCard';
import IdeaInput from './ideas/IdeaInput';
import IdeasList from './ideas/IdeaList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <ProfileCard />
      <IdeaInput />
      <IdeasList />
    </Container>
  );
};

export default Home;
