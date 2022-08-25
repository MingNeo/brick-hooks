import { fireEvent } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'
import { useRef, useState } from 'react'
import useHover from '..'

const domNode = document.createElement('div')
domNode.style.width = '200px'
domNode.style.height = '200px'

describe('useHover', () => {
  it('hover success', async () => {
    const { result } = renderHook(() => {
      const domNodeRef = useRef(domNode)
      const [stateHover, setStateHover] = useState(false)
      const isHover = useHover(domNodeRef, {
        onOver: () => { setStateHover(true) },
        onOut: () => { setStateHover(false) }
      })

      return { isHover, stateHover }
    })

    act(() => {
      fireEvent.mouseEnter(domNode)
    })
    expect(result.current.isHover).toEqual(true)
    expect(result.current.stateHover).toEqual(true)

    act(() => {
      fireEvent.mouseOut(domNode)
    })
    expect(result.current.isHover).toEqual(false)
    expect(result.current.stateHover).toEqual(false)
  })
})
