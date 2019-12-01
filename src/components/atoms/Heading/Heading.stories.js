import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
  .add('normal', () => <Heading>Hello</Heading>)
  .add('big', () => <Heading big>Hello</Heading>);
