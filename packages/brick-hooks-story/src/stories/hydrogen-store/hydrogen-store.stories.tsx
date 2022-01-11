import React from 'react'
import CreateStoreDemo from './components/createStoreDemo'
import GlobalStoreDemo from './components/globalStoreDemo'
import ImmerPluginDemo from './components/ImmerPluginDemo'

export default {
  title: 'hydrogen-store',
}

export const _GlobalStoreDemo = () => <GlobalStoreDemo />

_GlobalStoreDemo.story = {
  name: 'Global Store Demo',
}

export const _CreateStoreDemo = () => <CreateStoreDemo />

_CreateStoreDemo.story = {
  name: 'Create Store Demo',
}

export const _ImmerPluginDemo = () => <ImmerPluginDemo />

_ImmerPluginDemo.story = {
  name: 'ImmerPlugin Demo',
}
