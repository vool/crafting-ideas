import React, { PropTypes } from 'react';
import Idea from './Idea';

const ideaListStyle = {};

const IdeaList = ({ ideas }) => {
  ideas = [
    {
      value: 'This is a really cool idea!',
      owner: {
        name: 'Tyler Anton',
        username: 'tyleranton'
      }
    },
    {
      value: 'This is another really cool idea!',
      owner: {
        name: 'Tyler Anton',
        username: 'tyleranton'
      }
    },
    {
      value: 'This is yet another a really cool idea!',
      owner: {
        name: 'Tyler Anton',
        username: 'tyleranton'
      }
    }
  ];

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
