const importGlobalFresh = (): void => {
  jest.isolateModules(() => {
    require('./global')
  })
}

const waitForRaf = (): Promise<void> =>
  new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

const flushMicrotasks = (): Promise<void> => Promise.resolve()

describe('global', () => {
  const createPopoverElement = (isAtomium = true) => {
    const element = document.createElement('ion-popover')

    if (isAtomium) element.classList.add('atomium-popover')

    document.body.appendChild(element)

    return element
  }

  const present = (element: Element) =>
    element.dispatchEvent(
      new Event('ionPopoverDidPresent', { bubbles: true, composed: true })
    )

  const dismiss = (element: Element) =>
    element.dispatchEvent(
      new Event('ionPopoverDidDismiss', { bubbles: true, composed: true })
    )

  const mockIonApp = (isPresent: boolean) =>
    jest
      .spyOn(document, 'querySelector')
      .mockReturnValue(isPresent ? document.createElement('ion-app') : null)

  // `:scope` is unsupported by Stencil's mock-doc, so the body-level query is
  // stubbed. `popovers` drives what the module sees as currently open.
  const mockBodyPopovers = (popovers: { dismiss: jest.Mock }[]) =>
    jest
      .spyOn(document.body, 'querySelectorAll')
      .mockReturnValue(popovers as unknown as NodeListOf<HTMLIonPopoverElement>)

  const createPopoverMock = () => ({
    dismiss: jest.fn().mockResolvedValue(true),
  })

  beforeEach(() => {
    delete window.__atomiumDismissPopoversOnScroll
  })

  afterEach(() => {
    jest.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('should not listen to scroll until a popover is presented', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')

    importGlobalFresh()

    const scrollListenerCalls = addEventListenerSpy.mock.calls.filter(
      ([eventName]) => eventName === 'scroll'
    )

    expect(scrollListenerCalls).toHaveLength(0)
  })

  it('should listen to scroll in the capture phase once a popover is presented', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')

    importGlobalFresh()
    present(createPopoverElement())

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
      { capture: true, passive: true }
    )
  })

  it('should ignore popovers that do not belong to Atomium', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')

    importGlobalFresh()
    present(createPopoverElement(false))

    const scrollListenerCalls = addEventListenerSpy.mock.calls.filter(
      ([eventName]) => eventName === 'scroll'
    )

    expect(scrollListenerCalls).toHaveLength(0)
  })

  it('should dismiss body-level popovers on scroll when there is no ion-app', async () => {
    mockIonApp(false)

    const popover = createPopoverMock()

    mockBodyPopovers([popover])
    importGlobalFresh()
    present(createPopoverElement())
    window.dispatchEvent(new Event('scroll'))
    await waitForRaf()

    expect(popover.dismiss).toHaveBeenCalledTimes(1)
  })

  it('should not dismiss popovers when ion-app is present', async () => {
    mockIonApp(true)

    const popover = createPopoverMock()

    mockBodyPopovers([popover])
    importGlobalFresh()
    present(createPopoverElement())
    window.dispatchEvent(new Event('scroll'))
    await waitForRaf()

    expect(popover.dismiss).not.toHaveBeenCalled()
  })

  it('should dismiss only once per frame when scroll fires repeatedly', async () => {
    mockIonApp(false)

    const popover = createPopoverMock()

    mockBodyPopovers([popover])
    importGlobalFresh()
    present(createPopoverElement())
    window.dispatchEvent(new Event('scroll'))
    window.dispatchEvent(new Event('scroll'))
    window.dispatchEvent(new Event('scroll'))
    await waitForRaf()

    expect(popover.dismiss).toHaveBeenCalledTimes(1)
  })

  it('should not dismiss a popover when the scroll comes from its own option list', async () => {
    mockIonApp(false)

    const popover = createPopoverMock()
    const popoverElement = createPopoverElement()
    const optionList = document.createElement('div')

    popoverElement.appendChild(optionList)
    mockBodyPopovers([popover])
    importGlobalFresh()
    present(popoverElement)
    // `bubbles: true` is required to reach the window listener under Stencil's
    // mock-doc, which does not implement capture-phase propagation. Real
    // `scroll` events don't bubble — what matters here is that the handler
    // sees an `event.target` living inside the popover.
    optionList.dispatchEvent(new Event('scroll', { bubbles: true }))
    await waitForRaf()

    expect(popover.dismiss).not.toHaveBeenCalled()
  })

  it('should stop listening to scroll once the last popover is dismissed', async () => {
    mockIonApp(false)

    const popover = createPopoverMock()
    const popoverElement = createPopoverElement()

    mockBodyPopovers([popover])
    importGlobalFresh()
    present(popoverElement)

    // Ionic detaches the element only after emitting `didDismiss`, so the
    // module re-reads the DOM a microtask later — by then it is empty.
    mockBodyPopovers([])
    dismiss(popoverElement)
    await flushMicrotasks()

    // Re-stock the query so a *still attached* listener would have something
    // to dismiss — otherwise this assertion would pass either way.
    const reopened = createPopoverMock()

    mockBodyPopovers([reopened])
    window.dispatchEvent(new Event('scroll'))
    await waitForRaf()

    expect(reopened.dismiss).not.toHaveBeenCalled()
  })

  it('should keep listening while another popover is still open', async () => {
    mockIonApp(false)

    const popover = createPopoverMock()
    const firstElement = createPopoverElement()
    const secondElement = createPopoverElement()

    mockBodyPopovers([popover])
    importGlobalFresh()
    present(firstElement)
    present(secondElement)

    dismiss(firstElement)
    await flushMicrotasks()

    window.dispatchEvent(new Event('scroll'))
    await waitForRaf()

    expect(popover.dismiss).toHaveBeenCalledTimes(1)
  })

  it('should register the scroll listener only once while a popover is open', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')

    importGlobalFresh()
    present(createPopoverElement())
    present(createPopoverElement())

    const scrollListenerCalls = addEventListenerSpy.mock.calls.filter(
      ([eventName]) => eventName === 'scroll'
    )

    expect(scrollListenerCalls).toHaveLength(1)
  })

  it('should register the popover listeners only once across repeated imports', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener')

    importGlobalFresh()
    importGlobalFresh()

    const presentListenerCalls = addEventListenerSpy.mock.calls.filter(
      ([eventName]) => eventName === 'ionPopoverDidPresent'
    )

    expect(presentListenerCalls).toHaveLength(1)
  })
})
