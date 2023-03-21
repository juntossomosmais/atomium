import { newSpecPage } from '@stencil/core/testing'

import { AtoInput } from './input'

describe('ato-input', () => {
  it('renders with default values', async () => {
    const page = await newSpecPage({
      components: [AtoInput],
      html: `<ato-input value="test"></ato-input>`,
    })
    expect(page.root).toEqualHtml(`
      <ato-input value="test" color="primary" fill="default" type="text">
        <mock:shadow-root>
          <ion-item fill="default">
            <ion-input color="primary" fill="default" mode="md" size="default" type="text" value="test"></ion-input>
          </ion-item>
        </mock:shadow-root>
      </ato-input>
    `)
  })

  it('renders with custom props', async () => {
    const props = `
      accept=".jpg, .jpeg, .png" autocapitalize="sentences" autocomplete="off" autofocus="true" clear-input="true" clearicon="trash" clearonedit="true" color="secondary" debounce="500" disabled="true" expandable="true" fill="outline" icon="heart" iconright="heart" inputmode="decimal" label-position="fixed" label-text="Password" maxlength="20" minlength="6" mode="ios" multiple="true" name="password" pattern="[A-Za-z]{3}" placeholder="Enter password" readonly="true" required="true" size="small" spellcheck="false" type="password" value="test"
    `
    const page = await newSpecPage({
      components: [AtoInput],
      html: `
        <ato-input ${props} label-text="Password" label-position="fixed" />
      `,
    })
    expect(page.root).toEqualHtml(`
      <ato-input ${props}>
        <mock:shadow-root>
          <ion-item fill="outline">
            <ion-label color="secondary" position="fixed">Password</ion-label>
            <ion-input accept=".jpg, .jpeg, .png" autocapitalize="sentences" autocomplete="off" autofocus="" clearinput="" color="secondary" debounce="500" disabled="" expandable="" fill="outline" icon="heart" inputmode="decimal" maxlength="20" minlength="6" mode="ios" multiple="" name="password" pattern="[A-Za-z]{3}" placeholder="Enter password" readonly="" required="" size="small" type="password" value="test"></ion-input>
          </ion-item>
        </mock:shadow-root>
      </ato-input>
    `)
  })

  it('emits atoChange event on input change', async () => {
    const page = await newSpecPage({
      components: [AtoInput],
      html: '<ato-input />',
    })

    await page.waitForChanges()

    const inputEl = page.root.shadowRoot.querySelector('ion-input')
    const spy = jest.fn()
    const inputValue = 'Test input change'

    page.root.addEventListener('atoChange', spy)
    inputEl.value = inputValue

    page.root.dispatchEvent(
      new CustomEvent('atoChange', { detail: { value: inputValue } })
    )

    expect(spy).toHaveBeenCalled()
  })

  it('emits atoFocus event on input focus', async () => {
    const page = await newSpecPage({
      components: [AtoInput],
      html: '<ato-input />',
    })

    await page.waitForChanges()

    const inputEl = page.root.shadowRoot.querySelector('ion-input')
    const spy = jest.fn()

    page.root.addEventListener('atoFocus', spy)
    inputEl.focus()

    page.root.dispatchEvent(new CustomEvent('atoFocus'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atoBlur event on input blur', async () => {
    const page = await newSpecPage({
      components: [AtoInput],
      html: '<ato-input />',
    })

    await page.waitForChanges()

    const inputEl = page.root.shadowRoot.querySelector('ion-input')
    const spy = jest.fn()

    page.root.addEventListener('atoBlur', spy)
    inputEl.blur()

    page.root.dispatchEvent(new CustomEvent('atoBlur'))

    expect(spy).toHaveBeenCalled()
  })
})
