describe('form-request-submit polyfill', () => {
  it('should not throw when HTMLFormElement is undefined (SSR environment)', () => {
    const original = globalThis.HTMLFormElement

    delete globalThis.HTMLFormElement

    expect(() => {
      jest.isolateModules(() => {
        require('./form-request-submit.js')
      })
    }).not.toThrow()

    globalThis.HTMLFormElement = original
  })
})
