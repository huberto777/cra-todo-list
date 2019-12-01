import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Atoms/Input', module)
  .add('normal', () => <Input placeholder="add task" />)
  .add('search', () => <Input placeholder="search" search />);
