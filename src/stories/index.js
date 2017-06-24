/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import App from '../components/App';
import Idea from '../components/ideas/Idea';
import IdeaList from '../components/ideas/IdeaList';
import IdeasContainer from '../components/ideas/IdeasContainer';
import Login from '../components/auth/Login';

storiesOf('Crafting Ideas', module)
  .add('Login', () => <Login />)
  .add('App', () => <App />)
  .add('Idea', () => <Idea idea="This is a really cool idea!" />)
  .add('IdeaList', () => <IdeaList />)
  .add('IdeasContainer', () => <IdeasContainer />);
