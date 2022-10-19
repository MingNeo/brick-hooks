import mediaQuery from 'css-mediaquery'
import { EventBus } from 'brick-hooks/src/useEventBus'

function mockMatchMedia() {
  const { subscribe, publish } = new EventBus()
  const unSubscriptions: any[] = []
  const addEventListener = jest.fn().mockImplementation((event, cb) => {
    if (event === 'change') {
      const unsubscription = subscribe('matchMedia:pageReszie', (e) => {
        cb(e)
      })
      unSubscriptions.push(unsubscription)
    }
  })
  const removeEventListener = jest.fn().mockImplementation((event, cb) => {
    if (event === 'change') {
      unSubscriptions.forEach((unsubscription) => {
        try {
          unsubscription()
        } catch (error) {
          console.error('applyUnSubscriptions error', error)
        }
      })
    }
  })
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => {
      const instance = {
        matches: mediaQuery.match(query, {
          width: window.innerWidth,
          height: window.innerHeight,
        }),
        media: query,
        onchange: null,
        addListener: addEventListener, // Deprecated
        removeListener: removeEventListener, // Deprecated
        addEventListener,
        removeEventListener: removeEventListener,
        dispatchEvent: jest.fn(),
      }

      // Listen to resize events from window.resizeTo and update the instance's match
      window.addEventListener('resize', () => {
        const change = mediaQuery.match(query, {
          width: window.innerWidth,
          height: window.innerHeight,
        })

        if (change !== instance.matches) {
          instance.matches = change
          // instance.dispatchEvent('change')
          publish('matchMedia:pageReszie', { matches: change, media: query })
        }
      })

      return instance
    }),
  })
}

mockMatchMedia()

Object.defineProperty(window, 'resizeTo', {
  value: (width: number, height: number) => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: width,
    })
    Object.defineProperty(window, 'outerWidth', {
      configurable: true,
      writable: true,
      value: width,
    })
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      writable: true,
      value: height,
    })
    Object.defineProperty(window, 'outerHeight', {
      configurable: true,
      writable: true,
      value: height,
    })
    window.dispatchEvent(new Event('resize'))
  },
})
