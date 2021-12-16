import { fireEvent } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'
import { useState } from 'react'
import useScript from '../src/useScript'

describe('useScript', () => {
  const src = 'https://code.jquery.com/jquery-3.5.1.min.js'

  const scriptTagElement = (): HTMLScriptElement | null => document.body.querySelector(`script[src="${src}"]`)

  // Reset JSDOM after each test
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '<html><head></head><body>Empty DOM</body></html>'
  })

  it('should add script tag', async () => {
    const appendChildListener = jest.spyOn(document.body, 'appendChild')

    expect(appendChildListener).not.toBeCalled()

    expect(scriptTagElement()).toBeNull()

    const { result } = renderHook(() => {
      const [isLoaded, setIsLoaded] = useState(false)
      const { status, load } = useScript(src, () => {
        setIsLoaded(true)
      })

      return {
        load,
        status,
        isLoaded,
      }
    })

    expect(appendChildListener).toBeCalled()
    expect(scriptTagElement()).toBeInstanceOf(HTMLScriptElement)

    expect(result.current.status).toEqual('loading')
    expect(result.current.isLoaded).toEqual(false)

    await act(() => {
      result.current.load().then(() => {
        expect(result.current.status).toEqual('success')
        expect(result.current.isLoaded).toEqual(true)
      })
      // 模拟触发load事件
      fireEvent.load(document.querySelector<HTMLScriptElement>(`script[src="${src}"]`))
    })

    expect(result.current.status).toEqual('success')
    expect(result.current.isLoaded).toEqual(true)
  })

  it('should remove script tag on unmount', async () => {
    const removeChildListener = jest.spyOn(document.body, 'removeChild')

    expect(removeChildListener).not.toBeCalled()

    expect(scriptTagElement()).toBeNull()

    const { result, unmount } = renderHook(() => {
      const { ref, status, load } = useScript(src, () => {})

      return {
        ref,
        load,
        status,
      }
    })

    act(() => fireEvent.load(document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)))
    await act(async () => await result.current.load())
    expect(scriptTagElement()).toBeInstanceOf(HTMLScriptElement)

    unmount()

    expect(scriptTagElement()).toBeNull()
    expect(removeChildListener).toBeCalled()
    expect(result.current.ref.current).toBeNull()
  })
})
