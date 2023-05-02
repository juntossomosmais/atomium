import { newSpecPage } from '@stencil/core/testing'
import { AtomSelect } from './select'

const optionsMock = [
  { value: 'apple', selected: true },
  { value: 'banana', disabled: true },
  { value: 'orange' },
]

describe('AtomSelect', () => {
  it('should render an ion-select element', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    expect(page.root.shadowRoot.querySelector('ion-select')).toBeTruthy()
  })
  it('renders with all props', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: `<atom-select
        name="test"
        interface="action-sheet"
        placeholder="Select an option"
        cancel-text="Cancel"
        ok-text="OK"
        disabled
        multiple
        size="large"
        color="secondary"
        mode="ios"
        overlay-dismiss
        label="Select a fruit"
        label-placement="stacked"
      ></atom-select>`,
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select
        name="test"
        interface="action-sheet"
        placeholder="Select an option"
        cancel-text="Cancel"
        ok-text="OK"
        disabled
        multiple
        size="large"
        color="secondary"
        mode="ios"
        overlay-dismiss
        label="Select a fruit"
        label-placement="stacked"
      >
        <mock:shadow-root>
          <ion-item>
            <ion-select cancel-text="Cancel" color="secondary" disabled="" interface="action-sheet" label="Select a fruit" label-placement="stacked" mode="ios" multiple="" name="test" ok-text="OK" overlay-dismiss="" placeholder="Select an option">
              <ion-select-option value="apple">apple</ion-select-option>
              <ion-select-option value="banana" disabled>banana</ion-select-option>
              <ion-select-option value="orange">orange</ion-select-option>
            </ion-select>
          </ion-item>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('emits atomChange event on select change', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    const selectEl = page.root.shadowRoot.querySelector('ion-select')
    const spy = jest.fn()
    const selectValue = 'Option 2'

    page.root.addEventListener('ionChange', spy)
    selectEl.value = selectValue

    page.root.dispatchEvent(
      new CustomEvent('ionChange', { detail: { value: selectValue } })
    )

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomFocus event on select focus', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root.shadowRoot.querySelector('ion-select')
    const spy = jest.fn()

    page.root.addEventListener('ionFocus', spy)
    selectEl.focus()

    page.root.dispatchEvent(new CustomEvent('ionFocus'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomBlur event on select blur', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root.shadowRoot.querySelector('ion-select')
    const spy = jest.fn()

    page.root.addEventListener('ionBlur', spy)
    selectEl.blur()

    page.root.dispatchEvent(new CustomEvent('ionBlur'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomCancel event on select cancel', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root.shadowRoot.querySelector('ion-select')
    const spy = jest.fn()

    page.root.addEventListener('ionCancel', spy)
    page.root.dispatchEvent(new CustomEvent('ionCancel'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomDimiss event on select dimiss', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root.shadowRoot.querySelector('ion-select')
    const spy = jest.fn()

    page.root.addEventListener('ionDimiss', spy)
    page.root.dispatchEvent(new CustomEvent('ionDimiss'))

    expect(spy).toHaveBeenCalled()
  })
})
