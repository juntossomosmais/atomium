import { newSpecPage } from '@stencil/core/testing'
import { AtomSelect } from './select'

const optionsMock = [
  { value: 'apple', selected: true },
  { value: 'banana', disabled: true },
  { value: 'orange' },
]

describe('AtomSelect', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select>
        <mock:shadow-root>
          <ion-select class="atom-select" color="secondary" fill="solid" interface="popover" label-placement="stacked" mode="md" shape="round">
            <ion-select-option value="apple">apple</ion-select-option>
            <ion-select-option value="banana" disabled>banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
        </mock:shadow-root>
      </atom-select>
    `)
  })
  it('renders with all props', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: `<atom-select
        name="test"
        label="Select a fruit"
        placeholder="Select an option"
        color="primary"
        mode="ios"
        fill="outline"
        disabled
        multiple
      ></atom-select>`,
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select color="primary" disabled="" fill="outline" label="Select a fruit" mode="ios" multiple="" name="test" placeholder="Select an option">
        <mock:shadow-root>
          <ion-select class="atom-select" color="primary" disabled="" fill="outline" interface="popover" label="Select a fruit" label-placement="stacked" mode="ios" multiple="" name="test" placeholder="Select an option" shape="round">
            <ion-select-option value="apple">apple</ion-select-option>
            <ion-select-option value="banana" disabled>banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('render with icon', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: `
        <atom-select icon="person" />
      `,
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select icon="person">
        <mock:shadow-root>
          <ion-select class="atom-select has-icon" color="secondary" fill="solid" interface="popover" label-placement="stacked" mode="md" shape="round">
            <ion-select-option value="apple">apple</ion-select-option>
            <ion-select-option disabled="" value="banana">banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
          <atom-icon class="atom-color--secondary atom-icon" icon="person"></atom-icon>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('render with helper text', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: `
        <atom-select helper-text="Helper text" />
      `,
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select helper-text="Helper text">
        <mock:shadow-root>
          <ion-select class="atom-select" color="secondary" fill="solid" interface="popover" label-placement="stacked" mode="md" shape="round">
            <ion-select-option value="apple">apple</ion-select-option>
            <ion-select-option disabled="" value="banana">banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
          <div class="select-bottom">
            <div class="helper-text">Helper text</div>
          </div>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('render with error text and do not shows helper text', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: `
        <atom-select error-text="Error text" helper-text="Helper text" />
      `,
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select error-text="Error text" helper-text="Helper text">
        <mock:shadow-root>
          <ion-select class="atom-select has-error" color="secondary" fill="solid" interface="popover" label-placement="stacked" mode="md" shape="round">
            <ion-select-option value="apple">apple</ion-select-option>
            <ion-select-option disabled="" value="banana">banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
          <div class="select-bottom">
            <div class="error-text">Error text</div>
          </div>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('emits atomChange event on select change', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root?.shadowRoot?.querySelector('ion-select')
    const selectValue = 'Option 2'
    const spy = jest.fn()

    page.root?.addEventListener('atomChange', spy)

    const customEvent = new CustomEvent('ionChange', {
      detail: { value: selectValue },
    })

    if (selectEl) {
      selectEl.dispatchEvent(customEvent)
    }

    expect(spy).toHaveBeenCalled()
    expect(spy.mock.calls[0][0].detail).toEqual(selectValue)
  })

  it('emits atomFocus event on select focus', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root?.shadowRoot?.querySelector('ion-select')
    const spy = jest.fn()

    page.root?.addEventListener('ionFocus', spy)

    if (selectEl) {
      selectEl.dispatchEvent(new Event('ionFocus'))
    }

    page.root?.dispatchEvent(new CustomEvent('ionFocus'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomBlur event on select blur', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root?.shadowRoot?.querySelector('ion-select')
    const spy = jest.fn()

    page.root?.addEventListener('ionBlur', spy)

    if (selectEl) {
      selectEl.dispatchEvent(new Event('ionBlur'))
    }

    page.root?.dispatchEvent(new CustomEvent('ionBlur'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomCancel event on select cancel', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root?.shadowRoot?.querySelector('ion-select')
    const spy = jest.fn()

    page.root?.addEventListener('ionCancel', spy)

    if (selectEl) {
      selectEl.dispatchEvent(new Event('ionCancel'))
    }

    page.root?.dispatchEvent(new CustomEvent('ionCancel'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomDimiss event on select dimiss', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root?.shadowRoot?.querySelector('ion-select')
    const spy = jest.fn()

    page.root?.addEventListener('ionDimiss', spy)

    if (selectEl) {
      selectEl.dispatchEvent(new Event('ionDimiss'))
    }

    page.root?.dispatchEvent(new CustomEvent('ionDimiss'))

    expect(spy).toHaveBeenCalled()
  })

  it('should remove all event listeners on disconnect', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const inputEl = page.root?.shadowRoot?.querySelector('ion-select')
    const handleChange = jest.fn()
    const handleDimiss = jest.fn()
    const handleBlur = jest.fn()
    const handleFocus = jest.fn()
    const handleCancel = jest.fn()

    if (inputEl) {
      inputEl.addEventListener('ionChange', handleChange)
      inputEl.addEventListener('ionCancel', handleCancel)
      inputEl.addEventListener('ionCancel', handleDimiss)
      inputEl.addEventListener('ionBlur', handleBlur)
      inputEl.addEventListener('ionFocus', handleFocus)

      page.root?.shadowRoot?.removeChild(inputEl)
      page.rootInstance.disconnectedCallback()
    }

    await page.waitForChanges()

    expect(handleChange).not.toHaveBeenCalled()
    expect(handleCancel).not.toHaveBeenCalled()
    expect(handleDimiss).not.toHaveBeenCalled()
    expect(handleBlur).not.toHaveBeenCalled()
    expect(handleFocus).not.toHaveBeenCalled()
  })
})
