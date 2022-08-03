import { EqualsModeFalseDemo, EqualsModeTrueDemo } from 'packages/common/src/usePrevious/demo'
import React from 'react'

export default {
  title: 'usePrevious',
}

export const EqualsModeTrue = () => <EqualsModeTrueDemo />

EqualsModeTrue.story = {
  name: 'equalsMode true',
}

export const EqualsModeFalse = () => <EqualsModeFalseDemo />

EqualsModeFalse.story = {
  name: 'equalsMode false',
}
