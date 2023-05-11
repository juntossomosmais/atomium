import { newSpecPage } from '@stencil/core/testing'

import { AtomInput } from './input'

describe('AtomInput', () => {
  it('renders with default values', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: `<atom-input value="test"></atom-input>`,
    })
    expect(page.root).toEqualHtml(`
      <atom-input value="test">
        <mock:shadow-root>
          <ion-input autocomplete="off" class="atom-input" color="secondary" fill="solid" labelplacement="floating" mode="md" shape="round" type="text" value="test"></ion-input>
        </mock:shadow-root>
      </atom-input>
    `)
  })

  it('renders with custom props', async () => {
    const props = `
      autofocus="true" clear-input="false" clear-on-edit="false" color="secondary" disabled="true" expandable="true" fill="outline inputmode="decimal" label-placement="fixed" label="Password" mode="ios" multiple="true" name="password" pattern="[A-Za-z]{3}" placeholder="Enter password" required="true" type="password" value="test"
    `
    const page = await newSpecPage({
      components: [AtomInput],
      html: `
        <atom-input ${props} />
      `,
    })

    expect(page.root).toEqualHtml(`
      <atom-input ${props}>
        <mock:shadow-root>
          <ion-input autocomplete="off" autofocus="" class="atom-input" color="secondary" disabled="" fill="outline inputmode=" label="Password" labelplacement="fixed" mode="ios" multiple="" name="password" pattern="[A-Za-z]{3}" placeholder="Enter password" required="" shape="round" type="password" value="test"></ion-input>
        </mock:shadow-root>
      </atom-input>
    `)
  })

  it('render with icon', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: `
        <atom-input icon="person" />
      `,
    })

    expect(page.root).toEqualHtml(`
      <atom-input icon="person">
        <mock:shadow-root>
          <ion-input autocomplete="off" class="atom-input has-icon" color="secondary" fill="solid" labelplacement="floating" mode="md" shape="round" type="text"></ion-input>
          <atom-icon class="atom-color--secondary atom-icon" icon="person"></atom-icon>
        </mock:shadow-root>
      </atom-input>
    `)
  })

  it('render with togglePassword and show/hide password', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: `
        <atom-input type="password" password-toggle="true" />
      `,
    })

    await page.waitForChanges()
    const togglePasswordEl = page.root?.shadowRoot?.querySelector(
      '.atom-password-icon'
    )

    expect(page.rootInstance.type).toBe('password')
    expect(page.root).toEqualHtml(`
      <atom-input type="password" password-toggle="true">
        <mock:shadow-root>
          <ion-input autocomplete="off" class="atom-input" color="secondary" fill="solid" labelplacement="floating" mode="md" shape="round" type="password"></ion-input>
          <button class="atom-password-icon" type="button">
            <atom-icon class="atom-color--secondary" icon="eye"></atom-icon>
          </button>
        </mock:shadow-root>
      </atom-input>
    `)

    togglePasswordEl?.dispatchEvent(new Event('click'))
    await page.waitForChanges()

    expect(page.rootInstance.type).toBe('text')
    expect(page.root).toEqualHtml(`
      <atom-input type="password" password-toggle="true">
        <mock:shadow-root>
          <ion-input autocomplete="off" class="atom-input" color="secondary" fill="solid" labelplacement="floating" mode="md" shape="round" type="text"></ion-input>
          <button class="atom-password-icon" type="button">
            <atom-icon class="atom-color--secondary" icon="eye-off"></atom-icon>
          </button>
        </mock:shadow-root>
      </atom-input>
    `)
  })

  it('emits atomChange event on input change and atomInput event during input', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input />',
    })

    await page.waitForChanges()

    const inputEl = page.root?.shadowRoot?.querySelector('ion-input')
    const inputValue = 'Test input change'
    const spy = jest.fn()

    page.root?.addEventListener('ionChange', spy)
    page.root?.addEventListener('ionInput', spy)

    if (inputEl) {
      inputEl.value = inputValue
      inputEl.dispatchEvent(new Event('ionChange'))
      inputEl.dispatchEvent(new Event('ionInput'))
    }

    page.root?.dispatchEvent(
      new CustomEvent('ionChange', { detail: { value: inputValue } })
    )

    page.root?.dispatchEvent(
      new CustomEvent('ionInput', { detail: { value: inputValue } })
    )

    expect(spy).toHaveBeenCalled()
    expect(spy.mock.calls[0][0].detail.value).toEqual(inputValue)
  })

  it('emits atomFocus event on input focus', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input />',
    })

    await page.waitForChanges()

    const inputEl = page.root?.shadowRoot?.querySelector('ion-input')
    const spy = jest.fn()

    page.root?.addEventListener('ionFocus', spy)

    if (inputEl) {
      inputEl.dispatchEvent(new Event('ionFocus'))
    }

    page.root?.dispatchEvent(new CustomEvent('ionFocus'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomBlur event on input blur', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input />',
    })

    await page.waitForChanges()

    const inputEl = page.root?.shadowRoot?.querySelector('ion-input')
    const spy = jest.fn()

    page.root?.addEventListener('ionBlur', spy)

    if (inputEl) {
      inputEl.dispatchEvent(new Event('ionBlur'))
    }

    page.root?.dispatchEvent(new CustomEvent('ionBlur'))

    expect(spy).toHaveBeenCalled()
  })

  it('should remove all event listeners on disconnect', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input />',
    })

    await page.waitForChanges()

    const inputEl = page.root?.shadowRoot?.querySelector('ion-input')
    const handleChange = jest.fn()
    const handleInput = jest.fn()
    const handleBlur = jest.fn()
    const handleFocus = jest.fn()

    if (inputEl) {
      inputEl.addEventListener('ionChange', handleChange)
      inputEl.addEventListener('ionInput', handleInput)
      inputEl.addEventListener('ionBlur', handleBlur)
      inputEl.addEventListener('ionFocus', handleFocus)

      page.root?.shadowRoot?.removeChild(inputEl)
      page.rootInstance.disconnectedCallback()
    }

    await page.waitForChanges()

    expect(handleChange).not.toHaveBeenCalled()
    expect(handleInput).not.toHaveBeenCalled()
    expect(handleBlur).not.toHaveBeenCalled()
    expect(handleFocus).not.toHaveBeenCalled()
  })

  it('calls setFocus method correctly', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: `<atom-input></atom-input>`,
    })

    await page.waitForChanges()

    const mockInputEl = Object.assign(document.createElement('ion-input'), {
      setFocus: jest.fn(),
      getInputElement: () => document.createElement('input'),
    })

    const component = page.rootInstance
    component.inputEl = mockInputEl

    await component.setFocus()

    expect(mockInputEl.setFocus).toHaveBeenCalled()
  })

  it('returns the correct input element', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input></atom-input>',
    })

    await page.waitForChanges()

    const inputEl = {
      getInputElement: jest.fn(() => document.createElement('input')),
    }

    page.rootInstance.setInputEl(inputEl)
    const returnedInputElement = await page.rootInstance.getInputElement()

    expect(returnedInputElement).toBeInstanceOf(HTMLInputElement)
    expect(inputEl.getInputElement).toHaveBeenCalled()
  })
})
