import React, { useRef } from 'react'
import { act } from '@testing-library/react-hooks'
import { render, fireEvent } from '@testing-library/react'
import useInView from '..'

const timeout = (time: number) => new Promise<any>((resolve) => setTimeout(resolve, time))

function ScrollView() {
  const rootRef = useRef<any>()
  const targetRef = useRef()
  const { rootProps, targetProps, isInView } = useInView({ target: targetRef, root: rootRef })
  const scrollToTop = () => rootRef.current?.scrollTo(100)
  return (
    <div style={{ height: '1000px', width: '100px' }} {...rootProps}>
      <p style={{ width: '100%', height: '100px', marginTop: '200px' }} {...targetProps}>
        item
      </p>
      <p data-state={isInView}>isInView</p>
      <button onClick={() => scrollToTop()}>btn</button>
    </div>
  )
}

describe('useInView', () => {
  it('initial scroll', async () => {
    const { container, getByText } = render(React.createElement(ScrollView))

    act(() => {
      container.scrollTop = 100
    })

    await act(async () => await timeout(1))
    expect(container.scrollTop).toBe(100)
    expect(getByText('isInView').dataset.state).toEqual('false')

    act(() => {
      container.scrollTop = 220
    })

    await act(async () => await timeout(1))
    expect(container.scrollTop).toBe(220)
    expect(getByText('isInView').dataset.state).toEqual('false')
  })
})
