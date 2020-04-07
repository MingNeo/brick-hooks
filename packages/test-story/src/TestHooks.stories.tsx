import React from 'react';
import { storiesOf } from '@storybook/react';
import TestUsePrevious from './components/TestUsePrevious';

storiesOf('测试usePrevious', module)
  .add('Test equalsMode true', () => <TestUsePrevious equalsMode />)
  .add('Test equalsMode false', () => <TestUsePrevious equalsMode={false} />);
