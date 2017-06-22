import React, { PropTypes } from 'react';
import Idea from './Idea';

const ideaListStyle = {};

const IdeaList = ({ ideas }) => {
  return (
    <div style={ideaListStyle}>
      {ideas.map(idea => <Idea idea={idea} />)}
    </div>
  );
};

IdeaList.propTypes = {
  ideas: PropTypes.array.isRequired
};

export default IdeaList;
