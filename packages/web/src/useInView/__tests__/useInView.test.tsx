import React, { useRef } from 'react'
import { act } from '@testing-library/react-hooks'
import { render } from '@testing-library/react'
import useInView from '..'

const timeout = (time: number) => new Promise<any>((resolve) => setTimeout(resolve, time))

function ScrollView() {
  const rootRef = useRef<any>()
  const targetRef = useRef()
  const { rootProps, targetProps, isInView } = useInView({ target: targetRef, root: rootRef })
  return (
    <div style={{ width: '100px', height: 100, overflow: 'scroll' }} {...rootProps}>
      <div
        style={{
          width: 200,
          height: 50,
          backgroundColor: 'powderblue',
          marginTop: 300,
          marginBottom: 300,
        }}
        {...targetProps}
        data-state={isInView ? 'true' : 'false'}
      >
        isInView
      </div>
    </div>
  )
}

describe('useInView', () => {
  it('initial scroll', async () => {
    const { container, getByText } = render(React.createElement(ScrollView))
    expect(getByText('isInView').dataset.state).toEqual('false')

    act(() => {
      container.scrollTop = 10
    })

    await act(async () => await timeout(10))
    expect(container.scrollTop).toBe(10)
    // expect(getByText('isInView').dataset.state).toEqual('false')

    act(() => {
      container.scrollTop = 220
    })

    await act(async () => await timeout(10))
    expect(container.scrollTop).toBe(220)
    // expect(getByText('isInView').dataset.state).toEqual('false')
  })
})
