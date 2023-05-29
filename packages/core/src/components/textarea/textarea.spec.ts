import { newSpecPage } from '@stencil/core/testing'

import { AtomTextarea } from './textarea'

describe('AtomTextarea', () => {
  it('renders with default values', async () => {
    const page = await newSpecPage({
      components: [AtomTextarea],
      html: `<atom-textarea value="test"></atom-textarea>`,
    })
    expect(page.root).toEqualHtml(`
      <atom-textarea value="test">
        <mock:shadow-root>
          <ion-textarea class="atom-textarea" color="secondary" enterkeyhint="enter" fill="solid" labelplacement="floating" mode="md" rows="4" shape="round" value="test"></ion-textarea>
        </mock:shadow-root>
      </atom-textarea>
    `)
  })

  it('renders with custom props', async () => {
    const props = `
      autofocus="true" clear-input="false" clear-on-edit="false" color="secondary" disabled="true" expandable="true" fill="outline inputmode="decimal" label-placement="fixed" label="Password" mode="ios" multiple="true" name="password" pattern="[A-Za-z]{3}" placeholder="Enter password" required="true" type="password" value="test"
    `
    const page = await newSpecPage({
      components: [AtomTextarea],
      html: `
        <atom-textarea ${props} />
      `,
    })

    expect(page.root).toEqualHtml(`
      <atom-textarea ${props}>
        <mock:shadow-root>
          <ion-textarea autofocus="" class="atom-textarea" color="secondary" disabled="" enterkeyhint="enter" fill="outline inputmode=" label="Password" labelplacement="fixed" mode="ios" name="password" placeholder="Enter password" required="" rows="4" shape="round" value="test"></ion-textarea>
        </mock:shadow-root>
      </atom-textarea>
    `)
  })

  it('render with icon', async () => {
    const page = await newSpecPage({
      components: [AtomTextarea],
      html: `
        <atom-textarea icon="person" />
      `,
    })

    expect(page.root).toEqualHtml(`
      <atom-textarea icon="person">
        <mock:shadow-root>
          <ion-textarea class="atom-textarea has-icon" color="secondary" enterkeyhint="enter" fill="solid" labelplacement="floating" mode="md" rows="4" shape="round"></ion-textarea>
          <atom-icon class="atom-color--secondary atom-icon" icon="person"></atom-icon>
        </mock:shadow-root>
      </atom-textarea>
    `)
  })

  it('emits atomChange event on textarea change and atomInput event during input', async () => {
    const page = await newSpecPage({
      components: [AtomTextarea],
      html: '<atom-textarea />',
    })

    await page.waitForChanges()

    const textareaEl = page.root?.shadowRoot?.querySelector('ion-textarea')
    const inputValue = 'Test input change'
    const spy = jest.fn()

    page.root?.addEventListener('ionChange', spy)
    page.root?.addEventListener('ionInput', spy)

    if (textareaEl) {
      textareaEl.value = inputValue
      textareaEl.dispatchEvent(new Event('ionChange'))
      textareaEl.dispatchEvent(new Event('ionInput'))
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

  it('emits atomFocus event on textarea focus', async () => {
    const page = await newSpecPage({
      components: [AtomTextarea],
      html: '<atom-textarea />',
    })

    await page.waitForChanges()

    const textareaEl = page.root?.shadowRoot?.querySelector('ion-textarea')
    const spy = jest.fn()

    page.root?.addEventListener('ionFocus', spy)

    if (textareaEl) {
      textareaEl.dispatchEvent(new Event('ionFocus'))
    }

    page.root?.dispatchEvent(new CustomEvent('ionFocus'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomBlur event on textarea blur', async () => {
    const page = await newSpecPage({
      components: [AtomTextarea],
      html: '<atom-textarea />',
    })

    await page.waitForChanges()

    const textareaEl = page.root?.shadowRoot?.querySelector('ion-textarea')
    const spy = jest.fn()

    page.root?.addEventListener('ionBlur', spy)

    if (textareaEl) {
      textareaEl.dispatchEvent(new Event('ionBlur'))
    }

    page.root?.dispatchEvent(new CustomEvent('ionBlur'))

    expect(spy).toHaveBeenCalled()
  })

  it('should remove all event listeners on disconnect', async () => {
    const page = await newSpecPage({
      components: [AtomTextarea],
      html: '<atom-textarea />',
    })

    await page.waitForChanges()

    const textareaEl = page.root?.shadowRoot?.querySelector('ion-textarea')
    const handleChange = jest.fn()
    const handleInput = jest.fn()
    const handleBlur = jest.fn()
    const handleFocus = jest.fn()

    if (textareaEl) {
      textareaEl.addEventListener('ionChange', handleChange)
      textareaEl.addEventListener('ionInput', handleInput)
      textareaEl.addEventListener('ionBlur', handleBlur)
      textareaEl.addEventListener('ionFocus', handleFocus)

      page.root?.shadowRoot?.removeChild(textareaEl)
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
      components: [AtomTextarea],
      html: `<atom-textarea></atom-textarea>`,
    })

    await page.waitForChanges()

    const mocktextareaEl = Object.assign(
      document.createElement('ion-textarea'),
      {
        setFocus: jest.fn(),
        gettextareaElement: () => document.createElement('input'),
      }
    )

    const component = page.rootInstance
    component.textareaEl = mocktextareaEl

    await component.setFocus()

    expect(mocktextareaEl.setFocus).toHaveBeenCalled()
  })

  it('returns the correct textarea element', async () => {
    const page = await newSpecPage({
      components: [AtomTextarea],
      html: '<atom-textarea></atom-textarea>',
    })

    await page.waitForChanges()

    const textareaEl = {
      getInputElement: jest.fn(() => document.createElement('textarea')),
    }

    page.rootInstance.setInputEl(textareaEl)
    const returnedTextareaElement = await page.rootInstance.getInputElement()

    expect(returnedTextareaElement).toHaveProperty('tagName', 'TEXTAREA')
    expect(textareaEl.getInputElement).toHaveBeenCalled()
  })
})
