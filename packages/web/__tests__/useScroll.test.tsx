import React, { useRef } from 'react'
import { act } from '@testing-library/react-hooks'
import { render, fireEvent } from "@testing-library/react";
import useScroll from '../src/useScroll'

const timeout = (time: number) => new Promise<any>((resolve) => setTimeout(resolve, time))

function ScrollView() {
  const ref = useRef<any>()
  const scrollTo = jest.fn().mockImplementation((n) => {
    if(ref.current) {
      ref.current.scrollTop = n
    }
  })
  
  const { y, scrollToTop } = useScroll(ref)
  return (
    <div style={{ height: '100px', width: '100px' }} ref={ref}>
      <p style={{ width: '100%', height: '1000px' }}>{y}</p>
      <button onClick={() => scrollTo(100)}>btn</button>
    </div>
  )
}

describe('useScroll', () => {
  it('引用正常', () => {
    expect(useScroll).toBeDefined()
  })
  // it('initial scroll', async () => {
  //   const { container, getByText } = render(React.createElement(ScrollView));
  //   act(() => {
  //     fireEvent.click(getByText('btn'))
  //   })
  //   await act(() => timeout(100))
  //   expect(container.scrollTop).toBe(100)
  //   expect(getByText('p').innerHTML).toBe(100)
  // })
})
