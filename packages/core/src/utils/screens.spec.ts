import { isMaxTablet, isMobile } from './screens'

describe('screens', () => {
  const originalMatchMedia = Object.getOwnPropertyDescriptor(
    globalThis,
    'matchMedia'
  )

  const mockMatchMedia = (matches: boolean) => {
    const matchMediaMock = jest.fn().mockReturnValue({ matches })

    Object.defineProperty(globalThis, 'matchMedia', {
      configurable: true,
      writable: true,
      value: matchMediaMock,
    })

    return matchMediaMock
  }

  afterEach(() => {
    if (originalMatchMedia) {
      Object.defineProperty(globalThis, 'matchMedia', originalMatchMedia)
    } else {
      Reflect.deleteProperty(globalThis, 'matchMedia')
    }
  })

  it.each([
    ['isMobile', isMobile, '(max-width: 768px)'],
    ['isMaxTablet', isMaxTablet, '(max-width: 991px)'],
  ])('%s should query matchMedia when available', (_, helper, query) => {
    const matchMediaMock = mockMatchMedia(true)

    expect(helper()).toBe(true)
    expect(matchMediaMock).toHaveBeenCalledWith(query)
  })

  it.each([
    ['isMobile', isMobile],
    ['isMaxTablet', isMaxTablet],
  ])('%s should return false when media does not match', (_, helper) => {
    mockMatchMedia(false)

    expect(helper()).toBe(false)
  })

  it.each([
    ['isMobile', isMobile],
    ['isMaxTablet', isMaxTablet],
  ])(
    '%s should fall back to false when matchMedia is unavailable',
    (_, helper) => {
      Reflect.deleteProperty(globalThis, 'matchMedia')

      expect(helper()).toBe(false)
    }
  )
})
