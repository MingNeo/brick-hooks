import React from 'react'
import { isBrowser } from '../utils'

const useIsoEffect = isBrowser ? React.useLayoutEffect : React.useEffect
export default useIsoEffect
