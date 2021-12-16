import React from 'react'
import { useScrollToTop as useScrollTopFn } from 'brick-hooks-native'
import usePageFocus from '../usePageFocus'

export default function useScrollToTop(ref: React.Ref<any>, { navigation }: { navigation?: any } = {}) {
  return usePageFocus(useScrollTopFn(ref), navigation)
}
