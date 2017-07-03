import React from 'react';
import PropTypes from 'prop-types';

const flexStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const cardStyle = {
  ...flexStyle,
  marginTop: '100px',
  width: '500px',
  height: '250px',
  border: '1px solid #E6E6E6',
  fontFamily: 'sans-serif'
};

const imageStyle = {
  position: 'relative',
  width: '140px',
  height: '140px',
  top: '-70px',
  borderRadius: '100px',
  marginBottom: '0'
};

const aboutStyle = {
  ...flexStyle,
  position: 'absolute',
  marginTop: '70px'
};

const ProfileCard = () => {
  return (
    <div style={cardStyle}>
      <img style={imageStyle} src="http://via.placeholder.com/140x140" />
      <div style={aboutStyle}>
        <h3>Tyler Anton</h3>
        <p>Developer. Dog Dad. I like ideas.</p>
      </div>
    </div>
  );
};

export default ProfileCard;
