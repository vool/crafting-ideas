import React, { PropTypes } from 'react';

const ideaStyle = {
  fontFamily: 'Sans-Serif',
  width: '400px',
  height: '50px',
  padding: '5px',
  color: '#444',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '5px',
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
  idea: PropTypes.string.isRequired
};

export default Idea;
