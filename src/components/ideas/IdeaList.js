import React from 'react';
import PropTypes from 'prop-types';
import Idea from './Idea';

const ideaListStyle = {};

const IdeaList = ({ ideas }) => {
  return (
    <div style={ideaListStyle}>
      {ideas.map((idea, index) => <Idea key={index} idea={idea} />)}
    </div>
  );
};

IdeaList.propTypes = {
  ideas: PropTypes.array.isRequired
};

export default IdeaList;
