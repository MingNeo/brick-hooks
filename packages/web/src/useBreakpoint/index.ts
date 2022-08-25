import { useMemo } from 'react'
import useMedia from '../useMedia'
import { increaseWithUnit, isNil } from '../utils'

interface Breakpoint {
  min?: number
  max?: number
  value: any
}
type BreakpointList = Breakpoint[]

export default function useBreakpoint(breakpointList: BreakpointList, initialValue?: any) {
  return useMedia(
    useMemo(
      () =>
        breakpointList
          .map((v) => {
            const { min, max } = v
            let media: string = ''
            if (!isNil(min) && isNil(max)) {
              media = `(min-width: ${increaseWithUnit('0px', min)})`
            } else if (isNil(min) && !isNil(max)) {
              media = `(max-width: ${increaseWithUnit('-0.1px', max)})`
            } else if (!isNil(min) && !isNil(max)) {
              media = `(min-width: ${increaseWithUnit('0px', min)}) and (max-width: ${increaseWithUnit('-0.1px', max)})`
            }
            return { ...v, media }
          })
          .filter((v) => v.media),
      [breakpointList]
    ),
    initialValue
  )
}
