import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { createStore } from '../src/index'
import { testUseStore } from './useStore.test'

const mockTestModuleModel = {
  state: {
    a: 1,
  },
  reducers: {
    changeValue: (state, payload) => ({ ...state, ...payload })
  }
}

const { useStore } = createStore({ modules: {
  test: mockTestModuleModel
} })

testUseStore(useStore)

