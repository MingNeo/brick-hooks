import React from 'react';
import { storiesOf } from '@storybook/react';
import TestCreateContextHook from './components/TestCreateContextHook';

storiesOf('测试TestCreateContextHook', module)
  .add('default', () => <TestCreateContextHook />);
