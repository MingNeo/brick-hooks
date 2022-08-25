import { renderHook } from '@testing-library/react-hooks'
import useLink from '..'

describe('useLink', () => {
  const cssLink = 'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.min.css';
  const getLinkNode = (): HTMLLinkElement | null => document.head.querySelector(`link#test-link`)

  // Reset JSDOM after each test
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '<html><head></head><body>Empty DOM</body></html>'
  })

  it('should add link tag', async () => {
    const appendChildListener = jest.spyOn(document.head, 'appendChild')

    expect(appendChildListener).not.toBeCalled()

    expect(getLinkNode()).toBeNull()

    const { unmount } = renderHook(() => {
      useLink(cssLink, 'test-link')
    })

    expect(appendChildListener).toBeCalled()
    expect(getLinkNode()).toBeInstanceOf(HTMLLinkElement)

    unmount()

    expect(getLinkNode()).toBeInstanceOf(HTMLLinkElement)
  })

  it('should remove link tag on unmount', async () => {
    const removeChildListener = jest.spyOn(document.head, 'removeChild')

    expect(removeChildListener).not.toBeCalled()

    expect(getLinkNode()).toBeNull()

    const { unmount } = renderHook(() => {
      useLink(cssLink, 'test-link', { removeOnDestroy: true })
    })

    expect(getLinkNode()).toBeInstanceOf(HTMLLinkElement)

    unmount()

    expect(getLinkNode()).toBeNull()
    expect(removeChildListener).toBeCalled()
  })
})
