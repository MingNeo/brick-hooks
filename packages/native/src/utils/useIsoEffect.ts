import { useEffect, useLayoutEffect } from 'react'

const useIsoEffect =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
    ? useLayoutEffect
    : useEffect

export default useIsoEffect
