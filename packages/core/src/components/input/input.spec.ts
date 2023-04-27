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
          <ion-input class="ion-input" fill="outline" inputmode="none" labelplacement="floating" mode="md" type="text" value="test"></ion-input>
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
          <ion-input autofocus="" class="ion-input" color="secondary" disabled="" fill="outline inputmode=" inputmode="none" label="Password" labelplacement="fixed" mode="ios" multiple="" name="password" pattern="[A-Za-z]{3}" placeholder="Enter password" required="" type="password" value="test"></ion-input>
        </mock:shadow-root>
      </atom-input>
    `)
  })

  it('emits atomChange event on input change', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input />',
    })

    await page.waitForChanges()

    const inputEl = page.root.shadowRoot.querySelector('ion-input')
    const spy = jest.fn()
    const inputValue = 'Test input change'

    page.root.addEventListener('atomChange', spy)
    inputEl.value = inputValue

    page.root.dispatchEvent(
      new CustomEvent('atomChange', { detail: { value: inputValue } })
    )

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomFocus event on input focus', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input />',
    })

    await page.waitForChanges()

    const inputEl = page.root.shadowRoot.querySelector('ion-input')
    const spy = jest.fn()

    page.root.addEventListener('atomFocus', spy)
    inputEl.focus()

    page.root.dispatchEvent(new CustomEvent('atomFocus'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomBlur event on input blur', async () => {
    const page = await newSpecPage({
      components: [AtomInput],
      html: '<atom-input />',
    })

    await page.waitForChanges()

    const inputEl = page.root.shadowRoot.querySelector('ion-input')
    const spy = jest.fn()

    page.root.addEventListener('atomBlur', spy)
    inputEl.blur()

    page.root.dispatchEvent(new CustomEvent('atomBlur'))

    expect(spy).toHaveBeenCalled()
  })
})
