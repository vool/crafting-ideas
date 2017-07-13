import React from 'react';
import PropTypes from 'prop-types';
import { graphql, gql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = Container.extend`
  margin-top: 10%;
  width: 500px;
  height: 250px;
  border: 1px solid #e6e6e6;
  background-color: white;
`;

const ProfilePic = styled.img`
  position: relative;
  height: 140px;
  top: -70px;
  border-radius: 100px;
  margin-bottom: 0;
`;

const Info = Container.extend`
  position: absolute;
  margin-top: 70px;
`;

const Username = styled.span`color: #888;`;

const ProfileCard = ({ data }) => {
  if (data.loading) return <div>Loading...</div>;

  return (
    <Container>
      <Card>
        <ProfilePic src="http://via.placeholder.com/140x140" />
        <Info>
          <h3>
            {data.user.name}
          </h3>
          <Username>
            @{data.user.username}
          </Username>
          <p>
            {data.user.about}
          </p>
        </Info>
      </Card>
    </Container>
  );
};

ProfileCard.propTypes = {
  data: PropTypes.object.isRequired
};

const userQuery = gql`
  query userQuery {
    user {
      id
      name
      username
    }
  }
`;

export default graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
  withRouter(ProfileCard)
);
