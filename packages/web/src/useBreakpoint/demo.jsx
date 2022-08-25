import React from 'react'
import useBreakpoint from '.'
import useMedia from '../useMedia'

export function Demo() {
  const breakpointList = [
    { min: 1200, value: 6 },
    { min: 768, max: 1200, value: 12 },
    { max: 768, value: 24 },
  ]
  const col = useBreakpoint(breakpointList)
  return <div>col: {col}</div>
}

export function Demo1() {
  const mediaQueryValueList = [
    {
      media: '(min-width: 768px)',
      value: 6,
    },
    {
      media: '(max-width: 768px)',
      value: 24,
    },
  ]
  const col = useMedia(mediaQueryValueList)
  return <div>col: {col}</div>
}
