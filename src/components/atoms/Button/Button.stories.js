import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('add', () => <Button add>add</Button>)
  .add('edit', () => <Button edit>edit</Button>)
  .add('del', () => <Button del>del</Button>)
  .add('update', () => <Button update>upd</Button>);
