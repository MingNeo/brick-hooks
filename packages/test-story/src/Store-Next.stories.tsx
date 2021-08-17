import React from 'react';
import { storiesOf } from '@storybook/react';
import TestNextCreateStore from './components/store-next/TestCreateStoreSingle';
import TestNextStoreGlobal from './components/store-next/TestNextStoreGlobal';
import TestNextStoreImmer from './components/store-next/TestStoreImmer';

storiesOf('测试Next Store CreateStore', module)
  // .add('test createStore Single', () => <TestNextCreateStore />)
  .add('testStoreGlobal', () => <TestNextStoreGlobal />)
  .add('TestNextStoreImmer', () => <TestNextStoreImmer />);

