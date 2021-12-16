import React, { useRef } from 'react'
import { act } from '@testing-library/react-hooks'
import { render, fireEvent } from "@testing-library/react";

import useScroll from '../src/useScroll'

function ScrollView() {
  const ref = useRef()
  const { y, scrollToTop } = useScroll(ref)
  return (
    <div style={{ height: '100px', width: '100px' }} ref={ref}>
      <p style={{ width: '100%', height: '1000px' }}>{y}</p>
      <button onClick={() => scrollToTop(100)}>btn</button>
    </div>
  )
}

describe('useScroll', () => {
  it('initial scroll', () => {
    const { container, getByText } = render(React.createElement(ScrollView));
    act(() => {
      fireEvent.click(getByText('btn'))
    })
    setTimeout(() => {
      expect(container.scrollTop).toBe(100)
      expect(getByText('p').innerHTML).toBe(100)
    }, 1)
  })
})
