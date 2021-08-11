import React from 'react';
import { storiesOf } from '@storybook/react';
import TestNextCreateStore from './components/store-next/TestCreateStore';
import TestNextStoreSingle from './components/store-next/TestNextStore-single';
import TestNextStoreImmer from './components/store-next/TestStoreImmer';

storiesOf('测试Next Store CreateStore', module)
  .add('test createStore', () => <TestNextCreateStore />)
  .add('testStoreSingle', () => <TestNextStoreSingle />)
  .add('TestNextStoreImmer', () => <TestNextStoreImmer />);

