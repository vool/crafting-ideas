import React from 'react';
import PropTypes from 'prop-types';

const ideaStyle = {
  fontFamily: 'Sans-Serif',
  width: '400px',
  color: '#444',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  // marginTop: '1px',
  padding: '10px'
};

const content = {
  textAlign: 'inherit'
};

const header = {
  position: 'relative',
  marginLeft: '0'
};

const ideaValue = {
  color: 'black'
};

const Idea = ({ idea }) => {
  return (
    <div style={ideaStyle}>
      <div style={content}>
        <div style={header}>
          <span><strong>{idea.owner.name}&nbsp;</strong></span>
          <span>@{idea.owner.username}</span>
        </div>
        <div style={ideaValue}>
          <p>{idea.value}</p>
        </div>
      </div>
    </div>
  );
};

Idea.propTypes = {
  idea: PropTypes.object.isRequired
};

export default Idea;
