/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Idea from '../components/ideas/Idea';
import IdeaList from '../components/ideas/IdeaList';
import { IdeasContainer } from '../components/ideas/IdeasContainer';
import ProfileCard from '../components/profile/ProfileCard';

const getIdeas = () => {
  let ideas = [];
  for (let i = 0; i < 3; i++) {
    ideas.push({
      value: 'This is a really cool idea!',
      owner: {
        name: 'Tyler Anton',
        username: 'tyleranton'
      }
    });
  }

  return ideas;
};

storiesOf('Ideas', module)
  .add('Idea', () => <Idea idea={getIdeas()[0]} />)
  .add('IdeaList', () => <IdeaList ideas={getIdeas()} />)
  .add('IdeasContainer', () => <IdeasContainer ideas={getIdeas()} />);

storiesOf('Profile', module).add('ProfileCard', () => <ProfileCard />);
