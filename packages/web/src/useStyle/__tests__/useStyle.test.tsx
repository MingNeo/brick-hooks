import { renderHook } from '@testing-library/react-hooks'
import useStyle from '..'

describe('useStyle', () => {
  const getStyleNode = (): HTMLStyleElement | null => document.head.querySelector(`style#test-style`)

  // Reset JSDOM after each test
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '<html><head></head><body>Empty DOM</body></html>'
  })

  it('should add style tag', async () => {
    const appendChildListener = jest.spyOn(document.head, 'appendChild')

    expect(appendChildListener).not.toBeCalled()

    expect(getStyleNode()).toBeNull()

    const { unmount } = renderHook(() => {
      useStyle(`
        body {
          height: 100%;
        }
      `, 'test-style')
    })

    expect(appendChildListener).toBeCalled()
    expect(getStyleNode()).toBeInstanceOf(HTMLStyleElement)

    unmount()

    expect(getStyleNode()).toBeInstanceOf(HTMLStyleElement)
  })

  it('should remove style tag on unmount', async () => {
    const removeChildListener = jest.spyOn(document.head, 'removeChild')

    expect(removeChildListener).not.toBeCalled()

    expect(getStyleNode()).toBeNull()

    const { unmount } = renderHook(() => {
      useStyle(`
        body {
          height: 100%;
        }
      `, 'test-style', { removeOnDestroy: true })
    })

    expect(getStyleNode()).toBeInstanceOf(HTMLStyleElement)

    unmount()

    expect(getStyleNode()).toBeNull()
    expect(removeChildListener).toBeCalled()
  })
})
