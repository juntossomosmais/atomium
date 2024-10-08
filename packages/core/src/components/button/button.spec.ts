import { newSpecPage } from '@stencil/core/testing'

import { AtomButton } from './button'

describe('AtomButton', () => {
  it('should render an ion-button element', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button></atom-button>',
    })

    expect(page.root?.shadowRoot?.querySelector('ion-button')).toBeTruthy()
  })

  it('renders with all props', async () => {
    const labelText = 'Click me'

    const page = await newSpecPage({
      components: [AtomButton],
      html: `<atom-button>${labelText}</atom-button>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-button>
        <mock:shadow-root>
          <ion-button class="atom-button" color="primary" fill="solid" mode="md" part="button" shape="round" size="default" type="button">
            <span class="slot">
              <slot></slot>
            </span>
          </ion-button>
        </mock:shadow-root>
        ${labelText}
      </atom-button>
    `)
  })

  it('shows a spinner when loading', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button loading="true"></atom-button>',
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-button loading="true">
        <mock:shadow-root>
          <ion-button class="atom-button is-loading" color="primary" disabled="" fill="solid" mode="md" part="button" shape="round" size="default" type="button">
            <span class="loading">
              <ion-spinner color="light"></ion-spinner>
            </span>
            <span class="slot">
              <slot></slot>
            </span>
          </ion-button>
        </mock:shadow-root>
      </atom-button>
    `)
  })

  it('change spinner color when fill is not solid', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button fill="outline" loading="true"></atom-button>',
    })

    await page.waitForChanges()

    expect(page.root?.shadowRoot).toEqualHtml(`
      <ion-button class="atom-button is-loading" color="primary" disabled="" fill="outline" mode="md" part="button" shape="round" size="default" type="button">
        <span class="loading">
          <ion-spinner color="primary"></ion-spinner>
        </span>
        <span class="slot">
          <slot></slot>
        </span>
      </ion-button>
    `)
  })

  it('change color to "medium" when disabled', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button disabled="true"></atom-button>',
    })

    await page.waitForChanges()

    expect(page.root?.shadowRoot).toEqualHtml(`
      <ion-button class="atom-button" color="medium" disabled="" fill="solid" mode="md" part="button" shape="round" size="default" type="button">
        <span class="slot">
          <slot></slot>
        </span>
      </ion-button>
    `)
  })

  it('change shape to "circle"', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button shape="circle"></atom-button>',
    })

    await page.waitForChanges()

    expect(page.root?.shadowRoot).toEqualHtml(`
      <ion-button class="atom-button is-circle" color="primary" fill="solid" mode="md" part="button" shape="round" size="default" type="button">
        <span class="slot">
          <slot></slot>
        </span>
      </ion-button>
    `)
  })

  it('emits atomClick event on button click', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button>Click</atom-button>',
    })

    await page.waitForChanges()

    const buttonEl = page.root?.shadowRoot?.querySelector('ion-button')
    const spy = jest.fn()

    page.root?.addEventListener('atomClick', spy)
    buttonEl?.click()

    page.root?.dispatchEvent(new CustomEvent('atomClick'))

    expect(spy).toHaveBeenCalled()
  })

  it('should submit button call parent form requestSubmit', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<form><atom-button type="submit">Click</atom-button></form>',
    })

    await page.waitForChanges()
    const formEl = page.body.querySelector('form') as HTMLFormElement

    formEl.requestSubmit = jest.fn
    const buttonEl = page.root?.shadowRoot?.querySelector('ion-button')

    jest.spyOn(formEl, 'requestSubmit')

    buttonEl?.click()

    expect(formEl.requestSubmit).toHaveBeenCalled()
  })

  it('should submit button call parent form reset', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<form><atom-button type="reset">Click</atom-button></form>',
    })

    await page.waitForChanges()
    const formEl = page.body.querySelector('form') as HTMLFormElement

    formEl.reset = jest.fn()
    const buttonEl = page.root?.shadowRoot?.querySelector('ion-button')

    jest.spyOn(formEl, 'reset')
    buttonEl?.click()

    expect(formEl.reset).toHaveBeenCalled()
  })

  it('should not call form reset if button is disabled', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<form><atom-button type="reset" disabled>Click</atom-button></form>',
    })

    await page.waitForChanges()
    const formEl = page.body.querySelector('form') as HTMLFormElement

    formEl.reset = jest.fn()
    const buttonEl = page.root?.shadowRoot?.querySelector('ion-button')

    jest.spyOn(formEl, 'reset')
    buttonEl?.click()

    expect(formEl.reset).not.toHaveBeenCalled()
  })

  it('should allow default event when is link', async () => {
    const button = new AtomButton()

    button.href = 'http://example.com'
    button.download = 'name_file'
    button.target = '_blank'

    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })

    jest.spyOn(event, 'preventDefault')
    jest.spyOn(event, 'stopPropagation')

    //@ts-expect-error - Testing private method
    button.handleClick(event)

    expect(event.preventDefault).not.toHaveBeenCalled()
    expect(event.stopPropagation).not.toHaveBeenCalled()
  })

  it('should correctly apply polyfill for requestSubmit when not available in HTMLFormElement', async () => {
    //@ts-expect-error test purpose to remove requestSubmit from HTMLFormElement, and simulates a browser
    window.HTMLFormElement.prototype.requestSubmit = undefined

    jest.isolateModules(() => {
      require('../../polyfills/form-request-submit.js')
    })

    const page = await newSpecPage({
      components: [AtomButton],
      html: '<form><atom-button type="submit">Click</atom-button></form>',
    })

    await page.waitForChanges()

    const formEl = page.body.querySelector<HTMLFormElement>('form')!

    const buttonEl = page.root?.shadowRoot?.querySelector('ion-button')

    jest.spyOn(window.HTMLFormElement.prototype, 'requestSubmit')

    buttonEl?.click()

    expect(formEl.requestSubmit).toHaveBeenCalled()
  })

  it('should not apply polyfill for requestSubmit when it is already available in HTMLFormElement', async () => {
    window.HTMLFormElement.prototype.requestSubmit = jest.fn()
    const originalRequestSubmit = window.HTMLFormElement.prototype.requestSubmit

    jest.isolateModules(() => {
      require('../../polyfills/form-request-submit.js')
    })

    const page = await newSpecPage({
      components: [AtomButton],
      html: '<form><atom-button type="submit">Click</atom-button></form>',
    })

    await page.waitForChanges()

    const formEl = page.body.querySelector<HTMLFormElement>('form')!

    const buttonEl = page.root?.shadowRoot?.querySelector('ion-button')

    jest.spyOn(window.HTMLFormElement.prototype, 'requestSubmit')

    buttonEl?.click()

    expect(formEl.requestSubmit).toBe(originalRequestSubmit)
    expect(formEl.requestSubmit).toHaveBeenCalledTimes(1)
  })
})
