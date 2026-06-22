import { newSpecPage } from '@stencil/core/testing'

import { AtomInput } from './input'

describe('AtomInput', () => {
  it('renders with default values', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: `<atom-input value="test"></atom-input>`,
    })

    expect(page.root?.shadowRoot).toEqualHtml(
      `<ion-input class="atom-input" autocomplete="off" color="secondary" enterkeyhint="enter" fill="solid" labelplacement="floating" mode="md" shape="round" type="text" value="test"></ion-input>`
    )
  })

  it('renders with custom props', async () => {
    const props = `
      autofocus="true" clear-input="false" clear-on-edit="false" color="secondary" disabled="true" enterkeyhint="enter" expandable="true" fill="outline inputmode="decimal" label-placement="fixed" label="Password" mode="ios" multiple="true" name="password" pattern="[A-Za-z]{3}" placeholder="Enter password" required="true" type="password" value="test"
    `
    const page = await newSpecPage({
      components: [AtomInput],
      html: `
        <atom-input ${props} />
      `,
    })

    expect(page.root?.shadowRoot).toEqualHtml(`
      <ion-input autocomplete="off" autofocus="" class="atom-input" color="secondary"  disabled="" enterkeyhint="enter" fill="outline inputmode=" label="Password" labelplacement="fixed" mode="ios" multiple="" name="password" pattern="[A-Za-z]{3}" placeholder="Enter password" required="" shape="round" type="password" value="test"></ion-input>
    `)
  })

  it('render with icon', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: `
        <atom-input icon="account-multiple" />
      `,
    })

    expect(page.root?.shadowRoot).toEqualHtml(`
      <ion-input autocomplete="off" class="atom-input has-icon" color="secondary" enterkeyhint="enter" fill="solid" labelplacement="floating" mode="md" shape="round" type="text"></ion-input>
      <atom-icon class="atom-color--secondary atom-icon" icon="account-multiple"></atom-icon>
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
    expect(page.root?.shadowRoot).toEqualHtml(
      `<ion-input class="atom-input" autocomplete="off" color="secondary" enterkeyhint="enter" fill="solid" labelplacement="floating" mode="md" shape="round" type="password"></ion-input>`
    )

    page.rootInstance.value = 'test'
    await page.waitForChanges()

    expect(page.root?.shadowRoot).toEqualHtml(
      `<ion-input class="atom-input" autocomplete="off" color="secondary" enterkeyhint="enter" fill="solid" labelplacement="floating" mode="md" shape="round" type="password" value="test"></ion-input><button class="atom-password-icon" type="button"><atom-icon class="atom-color--secondary" icon="eye-off"></atom-icon></button>`
    )

    const togglePasswordEl = page.root?.shadowRoot?.querySelector(
      '.atom-password-icon'
    )

    togglePasswordEl?.dispatchEvent(new Event('click'))
    await page.waitForChanges()

    // Clicking the toggle flips type password -> text and the icon eye-off -> eye.
    expect(page.root?.shadowRoot).toEqualHtml(
      `<ion-input class="atom-input" autocomplete="off" color="secondary" enterkeyhint="enter" fill="solid" labelplacement="floating" mode="md" shape="round" type="text" value="test"></ion-input><button class="atom-password-icon" type="button"><atom-icon class="atom-color--secondary" icon="eye"></atom-icon></button>`
    )
  })

  it('bridges ion input/change to atomInput/atomChange with the value', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input />',
    })

    await page.waitForChanges()

    const ionInput = page.root?.shadowRoot?.querySelector('ion-input')
    const atomInputSpy = jest.fn()
    const atomChangeSpy = jest.fn()

    page.root?.addEventListener('atomInput', atomInputSpy)
    page.root?.addEventListener('atomChange', atomChangeSpy)

    if (ionInput) {
      ionInput.value = 'hello'
      ionInput.dispatchEvent(new CustomEvent('ionInput'))
      ionInput.dispatchEvent(new CustomEvent('ionChange'))
    }

    expect(atomInputSpy).toHaveBeenCalled()
    expect(atomInputSpy.mock.calls[0][0].detail).toBe('hello')
    expect(atomChangeSpy).toHaveBeenCalled()
    expect(atomChangeSpy.mock.calls[0][0].detail).toBe('hello')
  })

  it('emits an empty string (not "null") when the value is cleared', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input value="initial" />',
    })

    await page.waitForChanges()

    const ionInput = page.root?.shadowRoot?.querySelector('ion-input')
    const atomInputSpy = jest.fn()

    page.root?.addEventListener('atomInput', atomInputSpy)

    if (ionInput) {
      ionInput.value = null
      ionInput.dispatchEvent(new CustomEvent('ionInput'))
    }

    expect(atomInputSpy.mock.calls[0][0].detail).toBe('')
  })

  it('emits atomFocus on ion focus and atomBlur on ion blur', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input />',
    })

    await page.waitForChanges()

    const ionInput = page.root?.shadowRoot?.querySelector('ion-input')
    const focusSpy = jest.fn()
    const blurSpy = jest.fn()

    page.root?.addEventListener('atomFocus', focusSpy)
    page.root?.addEventListener('atomBlur', blurSpy)

    ionInput?.dispatchEvent(new CustomEvent('ionFocus'))
    ionInput?.dispatchEvent(new CustomEvent('ionBlur'))

    expect(focusSpy).toHaveBeenCalled()
    expect(blurSpy).toHaveBeenCalled()
  })

  it('disconnects from the DOM without throwing', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input />',
    })

    await page.waitForChanges()

    const host = page.root

    // AtomInput binds ion events declaratively via JSX (onIonInput); Stencil
    // tears those bindings down automatically on disconnect, so there is no
    // manual disconnectedCallback. Removing the host must not throw.
    expect(() => host?.remove()).not.toThrow()
    await page.waitForChanges()

    expect(host?.isConnected).toBe(false)
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

  it('does not throw when setFocus/getInputElement run before the inner input is ready', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input></atom-input>',
    })

    await page.waitForChanges()

    page.rootInstance.setInputEl(undefined)

    await expect(page.rootInstance.setFocus()).resolves.toBeUndefined()
    await expect(page.rootInstance.getInputElement()).resolves.toBeUndefined()
  })
})
